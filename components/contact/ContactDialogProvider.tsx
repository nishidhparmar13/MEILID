'use client'

import type { ReactNode } from 'react'
import { ContactDialogStateProvider } from './ContactDialogContext'
import ContactDialog from './ContactDialog'

const ContactDialogProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ContactDialogStateProvider>
            {children}
            <ContactDialog />
        </ContactDialogStateProvider>
    )
}

export default ContactDialogProvider
