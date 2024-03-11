import { Button } from '@/shared/button'
import { services, topServices } from '@/shared/constants/services'
import { Container } from '@/shared/container'
import { Icon } from '@/shared/icon'
import { Section } from '@/shared/section'
import React from 'react'


const App = () => {
    return (
        <>
            <header className='py-8'>
                <Container>
                    <nav className='flex items-center justify-between'>
                        <h2 className='font-bold text-2xl'>LOGO</h2>
                        <h4>@creator-it-bot</h4>
                    </nav>
                    <div className='mt-24 flex items-center justify-center'>
                        <div>
                            <h2 className='text-white text-6xl font-bold'>Creator IT</h2>
                            <p className='text-white/50 text-lg mt-8'>Выполняем задачи на IT-индустрии любой сложности. <br /> Индивидуальный подход к каждому</p>
                            <Button className=' mt-12'>Связаться с нами</Button>
                        </div>
                    </div>
                </Container>
            </header>
            <section className='mt-24'>
                <Container>
                    <Section>
                        <h4 className='text-dark font-semibold text-3xl text-center'>Наши услуги</h4>
                        <p className='text-dark/50 text-center text-lg font-medium mt-6'>Гарантируем точный и быстрый результат</p>
                        <div className='mt-16'>
                            <ul className='flex items-center flex-wrap gap-4'>
                                {topServices.map((item, index) => {
                                    return <li key={index} className='bg-[#F2F5F8] text-dark/50 px-6 py-3 cursor-default font-medium rounded-xl'>{item}</li>
                                })}
                            </ul>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-14'>
                                {services.map((service, index) => {
                                    return <div key={index} className='p-8 border border-[#F2F5F8]'>
                                        <div className='bg-primary/20 w-10 h-10 rounded-lg'></div>
                                        <h3 className='text-dark font-semibold text-lg mt-4'>{service.title}</h3>
                                        <ul className='text-dark/50 text-[15px] space-y-2 mt-4'>
                                            {service.child.map((item, idx) => {
                                                return <li key={idx}>{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                })}
                            </div>
                            {/* <div className='relative mt-24 mb-16'>
                                <div className='bg-[#F2F5F8] h-[2px]'></div>
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark/50 bg-white px-6 py-3 rounded-3xl font-medium border border-[#F2F5F8]'>Cмотреть все услуги</div>
                            </div> */}
                            <div className='mt-6'>
                                <h3 className='text-dark font-semibold text-2xl'>Не нашли что искали?</h3>
                                <h4 className='text-dark/50 text-lg font-medium mt-3'>Для нас нет нерешаемых задач. Наша команда всегда готова к новым вызовам</h4>
                                <Button className='mt-6'>Связаться с нами</Button>
                            </div>
                        </div>
                    </Section>
                </Container>
            </section>
            <section className='my-10'>
                <Container>
                    <Section className='pb-0'>
                        <h4 className='text-dark font-semibold text-3xl text-center'>Связаться с нами</h4>
                        <p className='text-dark/50 text-center text-lg font-medium mt-6'>Обсудим все детали. Отвечаем быстро</p>
                        <Button className='flex items-center gap-x-3 mx-auto mt-6'>
                            <span>Перейти в Telegram</span>
                            <Icon type='link' />
                        </Button>
                        <div className='text-center font-medium text-dark/50 mt-14 py-8 border-t border-[#F2F5F8]'><p>Creator IT, 2024</p></div>
                    </Section>
                </Container>
            </section>
        </>
    )
}

export default App