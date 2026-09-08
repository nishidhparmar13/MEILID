'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

interface ContactDialogContextValue {
    isOpen: boolean
    open: () => void
    close: () => void
}

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null)

export const ContactDialogStateProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const value = useMemo(
        () => ({
            isOpen,
            open: () => setIsOpen(true),
            close: () => setIsOpen(false),
        }),
        [isOpen]
    )

    return (
        <ContactDialogContext.Provider value={value}>
            {children}
        </ContactDialogContext.Provider>
    )
}

export const useContactDialog = () => {
    const ctx = useContext(ContactDialogContext)
    if (!ctx) {
        throw new Error('useContactDialog must be used within ContactDialogStateProvider')
    }
    return ctx
}
