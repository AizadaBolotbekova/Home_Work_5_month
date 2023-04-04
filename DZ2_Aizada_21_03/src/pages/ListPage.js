import React, { useEffect, useRef, useState} from 'react';
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';
function ListPage() {
    const [items, setItems] = useState([       
        { id: 1, name: "Wiz Halifa", song: "It's been a long day without you, my friend And I'll tell you all about it when I see you again We've come a long way from where we began Oh, I'll tell you all about it when I see you again When I see you again" },
        { id: 2, name: "Tom Odel", song: "And if somebody hurts you, I wanna fight But my hand's been broken one too many times So I'll use my voice, I'll be so fucking rude Words, they always win, but I know I'll lose And I'd sing a song that'd be just ours But I sang 'em all to another heart And I wanna cry, I wanna learn to love But all my tears have been used up" },
        { id: 3, name: "Charly Putch", song: "You just want attention, you don't want my heart Maybe you just hate the thought of me with someone new Yeah, you just want attention, I knew from the start You're just making sure I'm never gettin' over you"},
    ])
    
    useEffect(() =>
    {
        setItems(JSON.parse(window.localStorage.getItem('items')));
    }, [])

    useEffect(() =>
    {
        const result = JSON.stringify(items)
        window.localStorage.setItem('items', result);
    }, [items]);
    const [modalIsOpen,setModalIsOpen]=useState(false)
    const itemInput=useRef(null)
    const itemInput2 = useRef(null)
    
    console.log(items);
    const addNewItem = () =>
    {
        if (itemInput.current.value.length > 0 && itemInput2.current.value.length > 0) {
            const newItem = { id: items[items.length - 1].id + 1, name: itemInput.current.value, song: itemInput2.current.value }
            setItems((prevItems) =>[...prevItems,newItem]);
            itemInput.current.value = "";
            itemInput2.current.value = "";
            setModalIsOpen(true);
        }
    }

    return (
        <div>
            
            <ul>
                {items.map
                    (item => <li key={item.id}><Link to={`/item/${item.id}`} state={item}>{item.name}</Link></li>)
                }
            </ul>

            <button onClick={()=>setModalIsOpen(true)}>Add New Item</button>

            {modalIsOpen && <Modal openModal={modalIsOpen} closeModal={()=>setModalIsOpen(false)} >
                <input required ref={itemInput} placeholder="name" type={"text"}/>
                <input required ref={itemInput2} placeholder="Song" type={"text"}/>
                <button onClick={()=>{
                addNewItem()
                setModalIsOpen(false);}}
                >Add New Item </button>


            </Modal>}


        </div>

    );
}

export default ListPage;