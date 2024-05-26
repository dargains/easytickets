
"use client"
import React from 'react'
import SignupForm from '@/components/SignupForm';
import { User } from '@/types';

const initialUserState: User = {
  first_name: 'aaa',
  last_name: 'aaa',
  email: 'another3@example.com',
  password: 'd1r3ctu5',
  avatar: undefined,
  role: 'b110cd8b-96ad-40c9-a828-76a31c97772b',
}

const createUser = async (params: User) => {
  return await fetch(`/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}

const CreateUser = () => {

  const onSubmit = async (data: User) => {
    const response = await createUser(data)
    console.log(response)
  };

  return (
    <section>
      <h1>registo</h1>
      <SignupForm initialUserState={initialUserState} onSubmit={onSubmit} />
    </section>
  )
}

export default CreateUser