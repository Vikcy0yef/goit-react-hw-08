import s from "./HomePage.module.css"

const HomePage = () => {
    return (
      <div className={s.content}>
        <h1 >Welcome to the Contacts App!</h1>
        <p >Please register or log in to continue</p>
      </div>
    );
  };
  
  export default HomePage;