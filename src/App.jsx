import { IconPlaceholder, IconSettingsOff } from '@tabler/icons';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter'
import Input from './components/Input';
import InputRef from './components/InputRef';
import Label from './components/Label';
import Todo from './components/Todo';
import PlaceContentCenter from './components/PlaceContentCenter'
// import './App.css';
import axios from 'axios'

export default function App(props) {
   const [joke, setJoke] = useState('')

   useEffect(() => {
      const getJoke = async () => {
         const {data} = await axios(`https://api.chucknorris.io/jokes/random`)
         setJoke(data)
      }

      getJoke().then(r => r);
   }, [])

   return(
      <PlaceContentCenter>
         <Card>
            <Card.Title>Playground</Card.Title>
            <Card.Body>
               {joke.value}
            </Card.Body>
         </Card>
      </PlaceContentCenter>
   )
}


/*
export default function App(props) {
   const [loading, setLoading] = useState(false)
   const [users, setUsers] = useState([])

   useEffect(() => {
      async function getUsers() {
         setLoading(true)
         try {
            const {data} = await axios('https://jsonplaceholder.typicode.com/users')
            setUsers(data);
            console.log(data)
            setLoading(false)
         } catch (error) {
            console.log('mungkin url salah')
            setLoading(false)
         }
      }
      getUsers().then((r) => r);
   }, [])

   return(
      <PlaceContentCenter>
         <Card>
            <Card.Title>User {users.length}
            </Card.Title>
            <Card.Body>
               {loading ? <div>loading ...</div> : 
                  <ol>
                     {users.map((user) => (
                        <li key={user.id}>
                              {user.name}. Dengan alamat: {user.address.street}, {user.address.city}
                        </li>))}
                  </ol>
               }
            </Card.Body>
         </Card>
      </PlaceContentCenter>
   )
}*/


{/*
export default function App() {
   return (
      // <PlaceContentCenter>
      //    <Todo />
      // </PlaceContentCenter>
      <div className={'bg-slate-100 antialiased flex items-center justify-center min-h-screen'}>
         <div className={'block p-6 rounded-lg shadow-lg bg-white max-w-sm'}>
            <Card>
               <Card.Body>
                  <InputRef placeholder={'nama'} isFocused />
                  <InputRef placeholder={'email'}  />
               </Card.Body>
            </Card>
         </div>
      </div>
   )
}
*/}
 
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
