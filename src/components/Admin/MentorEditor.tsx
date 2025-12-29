"use client"
import React, { useState } from 'react'
import MentorTable from './Mentor/mentorTable';
import MentorCard from './Mentor/mentorCard';
import AddMentor from './Mentor/AddMentor';
import EditMentor from './Mentor/EditMentor';

type Mentor = {
    
    id: number;
    name: string;
    profession: string;
    work_experience: number;
    teaching_experience: number;
    description: string;
    created_at: number

};

const MentorEditor = ({ collapsed }: { collapsed: boolean }) => {
    const [active, setActive] = useState("card");
    const [editItem, setEditItem] = useState<Mentor | null>(null);

    const handleCardView = () => {
        setActive("card");
    }

    const handleTableView = () => {
        setActive("Table")
    }

    const handleAdd = () => {
        setActive("Add")
    }

    const onEdit = (mentor: Mentor) => {
        setActive("Edit");
        setEditItem(mentor);
    }

    return (
        <>

            <div>
                <div className='flex gap-4 w-full'>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleCardView}>Card</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleTableView}>Table</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleAdd}>Add</button>
                </div>
            </div>

            {active === "card" && <MentorCard onEdit={onEdit} />}
            {active === "Table" && <MentorTable onEdit={onEdit} />}
            {active === "Add" && <AddMentor collapsed={collapsed}/>}
            {active === "Edit" && editItem && (<EditMentor collapsed={collapsed} mentor={editItem} />)}

        </>
    );
}

export default MentorEditor