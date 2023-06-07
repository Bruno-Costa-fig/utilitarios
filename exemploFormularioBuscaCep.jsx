import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";


const createFormSchema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório").min(6, "O nome deve ter no mínimo 6 caracteres"),
  email: yup.string().required("Email obrigatório").email('Email inválido'),
  cep: yup.string().required("CEP é obrigatório").min(8, "O CEP deve ter no mínimo 8 caracteres"),
  logradouro: yup.string().required("Logradouro é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatório"),
  estado: yup.string().required("Estado é obrigatório"),
  complemento: yup.string(),
})



function FormComponent() {
  const {register, handleSubmit, setValue, getValues, formState: {errors}} = useForm({resolver: yupResolver(createFormSchema), defaultValues: {
    nome: "",
    email: "",
  }})

  const handleCreateUser = async (dados) => {
    console.log(dados)
  }

  const buscarCep = async () => {
    let cep = getValues('cep')

    if(!!cep){
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then(dados => {
        setValue('bairro', dados.bairro)
        setValue('logradouro', dados.logradouro)
        setValue('estado', dados.uf)
        setValue('cidade', dados.localidade)
      })
      .catch(error => console.log(error))
    }
  }

  return (
    <form style={{display: "flex", flexWrap: "wrap"}}
     action="" onSubmit={handleSubmit(handleCreateUser)}>
      <input type="text" name="nome" placeholder="nome" {...register('nome')} />
      {errors.nome && <span>{errors.nome.message}</span>}
      <input type="email" name="email" placeholder="email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="text" name="cep" {...register('cep', {
        required: true,
        onBlur: (e) => buscarCep(e)
      })} placeholder="CEP"/>
      {errors.cep && <span>{errors.cep.message}</span>}
      <input type="text" name="logradouro" placeholder="Logradouro" {...register('logradouro')}/>
      {errors.logradouro && <span>{errors.logradouro.message}</span>}
      <input type="text" name="numero" placeholder="Número" {...register('numero')}/>
      {errors.numero && <span>{errors.numero.message}</span>}
      <input type="text" name="complemento" placeholder="Complemento" {...register('complemento')}/>
      {errors.complemento && <span>{errors.complemento.message}</span>}
      <input type="text" name="bairro" placeholder="Bairro" {...register('bairro')}/>
      {errors.bairro && <span>{errors.bairro.message}</span>}
      <input type="text" name="cidade" placeholder="Cidade" {...register('cidade')}/>
      {errors.cidade && <span>{errors.cidade.message}</span>}
      <input type="text" name="estado" placeholder="Estado" {...register('estado')}/>
      {errors.estado && <span>{errors.estado.message}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComponent;  
