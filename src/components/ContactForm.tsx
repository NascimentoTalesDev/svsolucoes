"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { sendMail } from "@/app/actions";
import { Textarea } from "./ui/textarea";
import { Email } from "@/app/types/email";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Por favor, digite seu nome.",
    }),
    email: z.string().email().min(1, {
        message: "Por favor, digite seu email.",
    }),
    phone: z.string().min(11, {
        message: "Por favor, digite seu telefone.",
    }),
    message: z.string().optional()
});

const ContactForm = () => {
    const [isSendingMail, setIsSendingMail] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSendingMail(true)
        console.log(values);

        try {
            const res = await sendMail(values as Email)
            console.log("RESP EMAIL", res);

            toast.success("Email enviado com sucesso")
        } catch (error) {
            toast.error("Ocorreu um erro inesperado, tente mais tarde")
            console.log(error);
        }
        form.reset()
        setIsSendingMail(false)
    };

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="text"
                                        disabled={isSubmitting}
                                        placeholder="Digite seu nome"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[12px]" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        disabled={isSubmitting}
                                        placeholder="Digite seu email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[12px]" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="number"
                                        disabled={isSubmitting}
                                        placeholder="Digite seu telefone"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[12px]" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        className="resize-none"
                                        rows={5}
                                        disabled={isSubmitting}
                                        placeholder="Digite aqui a sua mensagem"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[12px]" />
                            </FormItem>
                        )}
                    />

                    <div className="my-3">
                        <Button
                            className="w-full"
                            type={"submit"}
                            variant={"default"}
                            disabled={!isValid || isSubmitting || isSendingMail}
                        >
                            {isSendingMail ?
                                <span className="flex items-center gap-2">
                                    Solicitando ... <Loader className="animate-spin" />
                                </span>
                                :
                                "Solicitar orçamento"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;