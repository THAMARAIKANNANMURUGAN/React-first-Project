import logo from './logo.svg';
import './App.css';
import Message from './Message';


function App() {
  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
  
    

    <Message mode="free" amount="0$" durate="/month"user="single user" storage="5gb storage" project="Unlimted public project" acces="Community Acess" privat="unlimted private acess" phone="dedicated phone support" domin="free subdomin" status="monthly status" but="Button"></Message>
      <Message mode="plus" amount="500$" durate="/month"user="5 user" storage="50gb storage" project="Unlimted public project" acces="Community Acess" privat="unlimted private acess" phone="dedicated phone support" domin="free subdomin" status="monthly status" but="Button"></Message>
     <Message mode="pro" amount="5000$" durate="/month"user="unlimted user" storage="unlimted storage" project="Unlimted public project" acces="Community Acess" privat="unlimted private acess" phone="dedicated phone support" domin="free subdomin" status="monthly status"but="Button"></Message> 
    

     </div>
    </div>
    </section>
    
   
  )
}
   

  


export default App;
