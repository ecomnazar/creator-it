interface FormProps {
    name: { value: string },
    phone: { value: string },
    email: { value: string },
    telegram: { value: string },
    description: { value: string }
}

export const Form = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & FormProps
        const name = target.name.value
        const phone = target.phone.value
        const email = target.email.value
        const telegram = target.telegram.value
        const description = target.description.value
        console.log({ name, phone, email, telegram, description })
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-2 bg-white rounded-[28px] p-8 mt-8 w-[700px] mx-auto'>
            <input type="text" name="name" placeholder='ФИО' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <input type="text" name="phone" placeholder='Номер телефона' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <input type="email" name="email" placeholder='Email' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <input type="text" name="telegram" placeholder='Ник в Telegram' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <textarea name="description" placeholder='Описание задачи' className='block border border-[#F2F5F8] text-dark/50 px-6 py-3 rounded-xl w-full' />
            <button type="submit" className='bg-primary w-full px-6 py-3 rounded-xl'>Отправить</button>
        </form>
    )
}
