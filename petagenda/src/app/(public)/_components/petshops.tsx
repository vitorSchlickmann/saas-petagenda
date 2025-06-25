import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import petImageShop from '../../../../public/5482557.jpg';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export function Petshops() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center mb-12 font-bold">Petshops disponíveis</h2>
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div>
                                <div className="relative h-48">
                                    <Image src={petImageShop} alt="Foto da petshop" fill className="object-cover" />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">Petshop Centro</h3>
                                        <p className="text-sm text-gray-500">Santa Catarina, Tubarão, Bairro Dehon, 800</p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                </div>
                                <Link href='/petshop/123' className='w-full bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center py-2 rounded-md text-s md:text-base font-medium'>Agendar horário <ArrowRight className="ml-2" /></Link>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>


        </section>
    )
}