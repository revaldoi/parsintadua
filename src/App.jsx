import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
// import './App.css';

export default function App() {
   return (
      <div className={'bg-slate-100 antialiased flex items-center justify-center min-h-screen'}>
         <div className={'block p-6 rounded-lg shadow-lg bg-white max-w-sm'}>
            <Card>
               <Card.Title>Halo</Card.Title>
               <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </Card.Body>
               <Card.Footer>
                  <Button onClick={() => console.log('Halo')} type='submit'>Register</Button>
               </Card.Footer>
            </Card>
         </div>
      </div>
   );
}
