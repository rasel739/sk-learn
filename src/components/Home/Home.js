import React from 'react';
import ChoiceCourse from '../ChoiceCourse/ChoiceCourse';
import Header from '../Header/Header';
import JoinToday from '../JoinToday/JoinToday';
import Partner from '../Partner/Partner';
import StartLearn from '../StartLearn/StartLearn';
import StudentSay from '../StudentSay/StudentSay';
import TopCategory from '../TopCategory/TopCategory';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopCategory></TopCategory>
            <ChoiceCourse></ChoiceCourse>
            <JoinToday></JoinToday>
            <StartLearn></StartLearn>
            <StudentSay></StudentSay>
            <Partner></Partner>
        </div>
    );
};

export default Home;