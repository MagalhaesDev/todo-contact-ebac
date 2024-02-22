import { useForm } from "react-hook-form";
import { AddNewContact, ButtonFormContact, InputFormContact } from "./styles";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from "react-redux";
import { create } from "../../store/reducers/contacts";

const confirmContactFormValidationSchema = z.object({
    contact: z.string().min(5, 'Informe o Nome Completo'),
    mail: z.string().min(1, 'Informe o e-mail'),
    number: z.string().min(1, 'Informe o telefone'),
})

export type ContactData = z.infer<typeof confirmContactFormValidationSchema>

export type ConfirmContactFormData = ContactData

interface ErrorsType {
    errors: {
      [key: string]: {
        message: string
      }
    }
}

interface FormAddNewContactProps {
    isOpenNewContact: true | false;
    handleOpenFormContact: () => void;
}


export function FormAddNewContact({isOpenNewContact, handleOpenFormContact}:FormAddNewContactProps) {
    const dispatch = useDispatch()
    const confirmOrderForm = useForm<ConfirmContactFormData>({
        resolver: zodResolver(confirmContactFormValidationSchema),
    })

    const { handleSubmit, register, formState, reset } = confirmOrderForm

    const { errors } = formState as unknown as ErrorsType

    function handleAddNewContact(data: ConfirmContactFormData) {
        dispatch(create(data))
        reset();
        handleOpenFormContact();
    }

    return (
        <AddNewContact onSubmit={handleSubmit(handleAddNewContact)} isOpenNewContact={isOpenNewContact}>
            <InputFormContact
                type="string"
                placeholder="Nome Completo"
                {...register('contact')}
                inputInvalid={!!errors.contact?.message}
            />
            <InputFormContact
                type="string"
                placeholder="Digite seu email"
                {...register('mail')}
                inputInvalid={!!errors.mail?.message}
            />
            <InputFormContact
                type="string"
                placeholder="Digite seu telefone"
                {...register('number')}
                inputInvalid={!!errors.number?.message}
            />
            <ButtonFormContact>Cadastrar</ButtonFormContact>
        </AddNewContact>
    )
}