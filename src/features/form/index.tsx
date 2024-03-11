import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface FormProps<T> {
    name: T,
    phone: T,
    email: T,
    telegram: T,
    description: T
}

const sendToTelegram = async (data: FormProps<string>) => {
    const { name, phone, email, telegram, description } = data
    const TOKEN = import.meta.env.VITE_TOKEN
    const CHAT_ID = import.meta.env.VITE_CHAT_ID
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>ФИО: </b>${name}\n`;
    message += `<b>Номер телефона: </b>${phone}\n`;
    message += `<b>Почта: </b>${email}\n`;
    message += `<b>Телеграм: </b>${telegram}\n`;
    message += `<b>Описание: </b>${description}\n`;

    await axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
}

export const Form = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & FormProps<{ value: string }>
        const name = target.name.value
        const phone = target.phone.value
        const email = target.email.value
        const telegram = target.telegram.value
        const description = target.description.value

        toast.promise(sendToTelegram({ name, phone, email, telegram, description }),
            {
                loading: 'Загрузка...',
                success: 'Ваша заявка принята',
                error: 'Произошла ошибка',
            }
        )
    }
    1
    return (<>
        <Toaster />
        <form onSubmit={handleSubmit} className='space-y-2 bg-white rounded-[28px] p-8 mb-10 w-[90%] md:w-[700px] mx-auto'>
            <h2 className="text-dark font-semibold text-2xl mb-4">Оставить заявку</h2>
            <input type="text" name="name" placeholder='ФИО' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <input type="text" name="phone" placeholder='Номер телефона' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <input type="email" name="email" placeholder='Email' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <input type="text" name="telegram" placeholder='Ник в Telegram' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <textarea name="description" placeholder='Описание задачи' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <button type="submit" className='bg-primary w-full px-6 py-3 rounded-xl'>Отправить</button>
        </form>
    </>
    )
}
