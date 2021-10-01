
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactsList from './components/ContactsList';
import { useEffect, useState } from 'react';
import api from './api/contacts'
import { BrowserRouter as Router, Sswitch, Route } from 'react-router-dom';

function App() {



  const [contacts, setContacts] = useState([]);

  // Retrieve data from server 
  const getContacts = async () => {
    const res = await api.get("/contacts");
    return res.data;
    //after this useEffect [below]
  }


  //Add data to server
  const addNewContact =async  (con) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const req = { id, ...con };
    const res=await api.post("/contacts",req);
    setContacts([...contacts, res.data]);
  }

  const [showAddContact, setShowAddContact] = useState(false);

  useEffect(() => {
    // to get contact
    const getAllContacts = async () => {
      const allContacts = await getContacts();
      if (allContacts) setContacts(allContacts);
    }
    getAllContacts();

  }, []);
  //Update
  const updateContact =async  (contact) => {
    const res=await api.put("/contacts/"+contact.id,contact);
    setContacts([...contacts, res.data]);
  }

//Delete contacts from server
const deleteContact=async (id) => {
  await api.delete('/contacts/'+id);
  const newConList=contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setContacts(newConList);
}


  return (

    <div className="container">
      <Header onAdd={() => setShowAddContact(!showAddContact)} showAddButton={showAddContact} />

      {showAddContact && <AddContact onAdd={addNewContact} title="Add Contact" />}

      <ContactsList contacts={contacts} delcon={deleteContact} updcon={updateContact}/>

    </div>
  );
}

export default App;
