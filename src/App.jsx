import { IconPlaceholder, IconSettingsOff } from '@tabler/icons';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter'
import Input from './components/Input';
import Label from './components/Label';
import Todo from './components/Todo';
import PlaceContentCenter from './components/PlaceContentCenter'
// import './App.css';

export default function App() {
   return (
      <PlaceContentCenter>
         <Todo />
      </PlaceContentCenter>
   )
}

{/*
export default function App() {
   const [form, setForm] = useState({
      name: 'dede',
      email: 'mail@domain.com'
   })

   function onChange(event){
      setForm({...form, [event.target.name] : event.target.value})
   }

   return (
      <div className={'bg-slate-100 antialiased flex items-center justify-center min-h-screen'}>
         <div className={'block p-6 rounded-lg shadow-lg bg-white max-w-sm'}>
            <Card>
               <Card.Title>Sign up for new account</Card.Title>
               <Card.Body>
                  <div className={'mb-5 border rounded-lg p-4'}>
                     <p>Name: {form.name}</p>
                     <p>Email: {form.email}</p>
                  </div>
                  <div className={'mb-6'}>
                     <Label htmlFor='name' value={'Name'}></Label>
                     <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                  </div>
                  <div className={'mb-6'}>
                     <Label htmlFor='email'>Email</Label>
                     <Input value={form.email} type={'email'} onChange={onChange} id={'email'} name={'email'} />
                  </div>
                  
               </Card.Body>
               <Card.Footer>
                  <Button onClick={() => console.log('Halo')} type='submit'>Register</Button>
               </Card.Footer>
            </Card>
         </div>
      </div>
   );
}
*/}
