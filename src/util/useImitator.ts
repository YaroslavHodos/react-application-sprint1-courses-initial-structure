import { useDispatch, useSelector } from "react-redux";
import { ImitatorAction, imitatorActions } from '../config/imitato-config';
import { addCourse, removeCourse, updateCourse } from '../redux/actions';
import { getRandomCourse } from './randomCourse';
import courseData from "../config/courseData.json"
import { getRandomNumber } from "./random";
import { useEffect } from "react";
import { Course } from '../models/Course';
import { StateType } from "../redux/store";

let courses: Course[];

export function useImitator() {
    courses = useSelector<StateType, Course[]>(state => state.courses);
    const dispatch = useDispatch();
    useEffect(() => {
        const intrvalId = setInterval(action, 2000);
        return () => clearInterval(intrvalId)
    }, []);
    
    function action() {
        const number = getRandomNumber(1,100);
        const imitatorAction: ImitatorAction = getAction(number);
        switch(imitatorAction.action) {
            case 'add': dispatchAdd(); break;
            case 'remove': dispatchRemowe(); break;
            case 'update': dispatchUpdate(); break;
            default: break;
        }
    }
    function dispatchAdd() {
        dispatch(addCourse(getRandomCourse(courseData)));
    }
    function dispatchRemowe() {
        if (courses.length != 0) {
            const index = getRandomNumber(0, courses.length -1);
            dispatch(removeCourse(courses[index].id));
            console.log(`removed course with id ${courses[index].id}`)
        }
    }
    function dispatchUpdate() {
        console.log('updating');
        if (courses.length != 0) {
            const index = getRandomNumber(0, courses.length - 1);
            const course = getRandomCourse(courseData);
            course.id = courses[index].id;
            dispatch(updateCourse(course));
            console.log(`updated course with id ${courses[index].id}`)
        }
    }
}

function getAction(num: number): ImitatorAction {
    return imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length - 1]
}