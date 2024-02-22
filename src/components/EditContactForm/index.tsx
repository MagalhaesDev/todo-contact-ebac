import { Check, X } from "lucide-react";
import { FormEditContact, InputFormEditContact } from "./styles";
import { useForm } from "react-hook-form";
import { ConfirmContactFormData } from "../FormAddNewContact";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TodoContactProps } from "../../App";
import { useDispatch } from "react-redux";
import { update } from "../../store/reducers/contacts";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}


const confirmEditContactFormValidationSchema = z.object({
    contact: z.string().min(5, 'Informe o Nome Completo'),
    mail: z.string().min(1, 'Informe o e-mail'),
    number: z.string().min(1, 'Informe o telefone'),
})

interface EditContactFormProps {
    handleCloseAndOpenEditTodo: () => void;
    task: TodoContactProps;
}

export function EditContactForm({ handleCloseAndOpenEditTodo, task }: EditContactFormProps) {
    const dispatch = useDispatch()
    const confirmOrderForm = useForm<ConfirmContactFormData>({
        resolver: zodResolver(confirmEditContactFormValidationSchema),
        defaultValues: {
            contact: task.contact,
            mail: task.mail,
            number: task.number,
        }
    })

    const { handleSubmit, register, formState, reset } = confirmOrderForm

    const { errors } = formState as unknown as ErrorsType

    function handleEditContact(data: ConfirmContactFormData) {
        dispatch(update(({
            id: task.id, 
            ...data
        })))

        reset();
        handleCloseAndOpenEditTodo();
    }

    return (
        <FormEditContact onSubmit={handleSubmit(handleEditContact)}>
            <InputFormEditContact 
               type="text" 
               placeholder="Digite o contato..."
               {...register('contact')}
               inputInvalid={!!errors.contact?.message} 
            />

            <InputFormEditContact 
               type="text" 
               placeholder="Digite o telefone..."
               {...register('number')}
               inputInvalid={!!errors.number?.message} 
            />

            <InputFormEditContact 
               type="text" 
               placeholder="Digite o email..."
               {...register('mail')}
               inputInvalid={!!errors.mail?.message} 
            />
            <div>
                <button onClick={() => handleCloseAndOpenEditTodo()}>
                    <X color="red" />
                </button>
                <button>
                    <Check color="green" />
                </button>
            </div>
        </FormEditContact>
    )
}