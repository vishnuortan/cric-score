import React,{useState} from 'react';
import {Body,Recent,Recentholder,Recentcontent,Navbar,Scorewrapper,Result,Scorecard,Score,Scoredetails1,Scoredetails2,Scoredetails3,Postwrapper,Postholder,Value,Post,Feedholder,Feed} from './styles/style'

export default function App() {
  const [value,setvalue]     = useState(0);
  const [scoreA,setscoreA]   = useState(0);
  const [scoreB,setscoreB]   = useState(0);
  const [wicketA,setwicketA] = useState(0); 
  const [wicketB,setwicketB] = useState(0); 
  const [overA,setoverA]     = useState('0.0');
  const [overB,setoverB]     = useState('0.0');
  const [result,setresult]   = useState('');
  const [over,setover]       = useState(1);
  const commentary           = [' no run taken','Its just a single','2 runs from the ball',' 4 runs from the ball','6 runs from the ball','its a wicket '];
  const [feed]               = useState([]);
  const [temp,settemp]       = useState('');
  const [recent,setrecent]   = useState([' ']);
  const totalover            = 20;

  const post = () =>{
   if(result == ''){                                            // check victory condition
      feed.push(temp);   
      if((recent.length!=0)&&(recent.length%7 == 0)){
        recent.push('-'); 
        recent.push(value);   
      }                                   
      else{
        recent.push(value);   
      }
      setover(over+1);                               
      let quotient  = Math.floor(over/6);
      let remainder = over%6;
      let update    = quotient+'.'+remainder;
      if((overA==totalover*6)||(wicketA===10)){                         // check the innnings break of teamA  
              if(scoreA < scoreB+value){
                  setresult('TeamB wins the match');
              }

              if(value=='w'){                            
                    setwicketB(wicketB+1);
                 if(wicketB+1==10){
                    if(scoreA == scoreB){
                      setresult('Match Draw');}
                      else{
                        setresult('TeamA wins the match');}
                    }
              }
              else{
                     setscoreB(scoreB+value);
                  }
          
               if(over==totalover*6){
                    if(scoreA == scoreB){
                       setresult('Match Draw');}
                    else{
                       setresult('TeamA wins the match');}
                }
                setoverB(update);
               }
              
      else{
              if(value=='w'){
                  setwicketA(wicketA + 1);                   // reset condition of over after teamA innings
                  if(wicketA==9){
                    setover(1);
                    setrecent([' ']);
                  }
              }
              else{
                  setscoreA(scoreA + value);
              }
              if(over==totalover*6-1){                                // reset condition of over after teamA innings
                  setover(1);
                  setrecent([' ']);
                }
              setoverA(update);             
      }
  }
  }
  
  const news =()=>{ 
        let temp2 = [];
        for(let i=feed.length-1;i>=0;i--){
              temp2.push(<Feed>{feed[i]}</Feed>)
        }
        return temp2; 
  }
  
  const recentball = () =>{
       let temp2 = [];
       for(let i=recent.length-1;i>=0;i--){
            temp2.push(<Recentcontent>{recent[i]}</Recentcontent>);
       }
       return temp2;
  }

  const select= (e)=>{
     settemp(commentary[e.target.id-1]);
     for(let i=1;i<=6;i++)
      {
         if(e.target.id==i){
            document.getElementById(i).style.background='slateblue';
            if(i<4){
              setvalue(i-1);}
            else if(i==5){
              setvalue(i+1);}
            else if(i==6){
              setvalue('w');}
            else{
              setvalue(i);}
          }
         else{
            document.getElementById(i).style.background='white';
          }
       }
    }

  return (
    <Body id="root">
      <Navbar>Cric-score</Navbar>
        <Scorewrapper>
            <Scorecard>
              <Score><Scoredetails1>TeamA</Scoredetails1><Scoredetails2>{scoreA}/{wicketA}</Scoredetails2><Scoredetails3>({overA})</Scoredetails3></Score>
              <Score><Scoredetails1>TeamB</Scoredetails1><Scoredetails2>{scoreB}/{wicketB}</Scoredetails2><Scoredetails3>({overB})</Scoredetails3></Score>
              <Recent>recent<Recentholder>{recentball()}</Recentholder></Recent>
              <Result>{result}</Result>
            </Scorecard>
            <Feedholder>{news()}</Feedholder>
        </Scorewrapper>
        <Postwrapper>
          <Postholder>
            <Value id="1"  onClick={(e)=>select(e)}>0</Value> 
            <Value id="2"  onClick={(e)=>select(e)}>1</Value> 
            <Value id="3"  onClick={(e)=>select(e)}>2</Value> 
            <Value id="4"  onClick={(e)=>select(e)}>4</Value> 
            <Value id="5"  onClick={(e)=>select(e)}>6</Value> 
            <Value id="6"  onClick={(e)=>select(e)}>W</Value> 
            <Post onClick={post}>post</Post>
          </Postholder>
        </Postwrapper>
    </Body>
  );
}

