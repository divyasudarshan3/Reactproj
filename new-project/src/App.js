
import './App.css';
import './img.css';
import Card from '@material-ui/core/Card'
import { Grid } from '@material-ui/core';
//import FavoriteColor from './component/FavouriteColor';
//import Greet from './component/Greet';
//import Welcome from './component/Greet';
//import Message from './component/message';
import Image from './component/atoms/image';
import BookCards from './component/molecules/BookCards';
//import BookCards from './component/molecules/BookCards';
//import { StyledInput } from './component/atoms/style';
//import Timer from './component/Timer';




function App() {
  return (
    <div className="App">
     {/* <Message/>
      <Welcome/>
      <Greet name="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" heroName="Batname">
       
</Greet>
<Greet name="Clark" heroName="Superman">

</Greet>
<Greet name="Diana" heroName="wonder woman"/>
<FavoriteColor/>
  <Timer/>*/}
   <Grid        //The Material Design responsive layout grid adapts to screen size and orientation
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }} //Viewport height
 >

  <Grid item xs={3}></Grid>
<Card
  style={{
    textAlign:'center',
    width:250,
    height:400,
   
  }}>
<Image/>
<BookCards/>
<sum/>  
</Card>
</Grid>   
 


    </div>
  );
}




export default App;
