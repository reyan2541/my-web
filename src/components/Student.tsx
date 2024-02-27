import styl from './Button.module.css'
function Student(props:any){
    return(
        <div className={styl.stu}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Sex: {props.sex}</p>
            <p>Student: {props.isStudent ? "yes": "no"}</p>
            
            </div>

    );
}


Student.defaultProps={
    name:"gust",
    age:0,
    isStudent:false,
}
export default Student;
