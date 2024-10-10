import { useState } from 'react'

export interface Address {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
}

interface UseCepReturn {
    address: Address
    isLoading: boolean
    error: string | null
    handleCepChange: (cep: string) => Promise<void>
    handleAddressChange: (field: keyof Address, value: string) => void
    validateAddress: () => boolean
    clearAddress: () => void
}

const initialAddress: Address = {
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
}

export function useCep(): UseCepReturn {
    const [address, setAddress] = useState<Address>(initialAddress)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleCepChange = async (cep: string) => {
        const cleanedCep = cep.replace(/\D/g, '')
        setAddress(prev => ({ ...prev, cep: cleanedCep }))

        if (cleanedCep.length === 8) {
            try {
                setIsLoading(true)
                setError(null)
                const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`)
                const data = await response.json()
                console.log(data)
                if (data.erro) {
                    setError('CEP não encontrado')
                    return
                }

                setAddress(prev => ({
                    ...prev,
                    street: data.logradouro || '',
                    neighborhood: data.bairro || '',
                    city: data.localidade || '',
                    state: data.uf || '',
                    complement: data.complemento || prev.complement
                }))
            } catch (error) {
                setError('Erro ao buscar CEP')
                console.error('Erro ao buscar CEP:', error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    const handleAddressChange = (field: keyof Address, value: string) => {
        setAddress(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const validateAddress = (): boolean => {
        const requiredFields: (keyof Address)[] = ['cep', 'street', 'number', 'neighborhood', 'city', 'state']
        return requiredFields.every(field => address[field].trim() !== '')
    }

    const clearAddress = () => {
        setAddress(initialAddress)
        setError(null)
    }

    return {
        address,
        isLoading,
        error,
        handleCepChange,
        handleAddressChange,
        validateAddress,
        clearAddress
    }
}