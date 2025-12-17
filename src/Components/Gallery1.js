import { Box, Container, Typography,Divider } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import mbimg from '../Assets/images/mbimg.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import p1 from '../Assets/images/p1.png'
import p2 from '../Assets/images/p2.jpg'
import p3 from '../Assets/images/p3.jpg'
import p4 from '../Assets/images/p4.jpeg'
import p5 from '../Assets/images/p5.jpeg'
import p6 from '../Assets/images/p6.jpeg'
import c1 from '../Assets/images/c1.jpeg'
import c2 from '../Assets/images/c2.jpg'
import c3 from '../Assets/images/c3.jpeg'
import c4 from '../Assets/images/c4.jpeg'
import c5 from '../Assets/images/c5.jpg'
import c6 from '../Assets/images/c6.jpg'
import b1 from '../Assets/images/b1.jpeg'
import b2 from '../Assets/images/b2.jpg'
import b3 from '../Assets/images/b3.jpg'
import b4 from '../Assets/images/b4.jpeg'
import b5 from '../Assets/images/b5.jpeg'
import b6 from '../Assets/images/b6.jpeg'
import s1 from '../Assets/images/s1.jpg'
import s2 from '../Assets/images/s2.jpeg'
import s3 from '../Assets/images/s3.jpg'
import s4 from '../Assets/images/s4.jpeg'
import s5 from '../Assets/images/s5.jpeg'
import s6 from '../Assets/images/s6.jpeg'
import d1 from '../Assets/images/d1.jpg'
import d2 from '../Assets/images/d2.jpeg'
import d3 from '../Assets/images/d3.jpeg'
import d4 from '../Assets/images/d4.jpeg'
import d5 from '../Assets/images/d5.jpeg'
import d6 from '../Assets/images/d6.jpeg'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}


const Gallery1 = () => {

    const menu =[
        {
            img:p1,
            name:"Deluxe Pizza",
            des:"Delicious food is rich in flavor and aroma.It makes every meal enjoyable."
        },
        {
            img:c1,
            name:"Manchurian",
            des:"Tasty food looks appealing and smells great.It excites the senses."
        },
        {
            img:b1,
            name:"Cookies",
            des:"Fresh ingredients improve the taste.They make food healthier and better."
        },
        {
            img:s5,
            name:"Veg Panner Salad",
            des:"Good food satisfies hunger completely.It leaves a pleasant feeling."
        },
        {
            img:d3,
            name:"Lemonade",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:c5,
            name:"Manchow Soup",
            des:"Well-cooked food pleases the taste buds.Every bite feels special."
        }
    ]
    const pizza =[
        {
            img:p1,
            name:"Deluxe Pizza",
            des:"Delicious food is rich in flavor and aroma.It makes every meal enjoyable."
        },
        {
            img:p2,
            name:"Tomato Pizza",
            des:"Tasty food looks appealing and smells great.It excites the senses."
        },
        {
            img:p3,
            name:"Veggie Pizza",
            des:"Fresh ingredients improve the taste.They make food healthier and better."
        },
        {
            img:p5,
            name:"Supreme Pizza",
            des:"Good food satisfies hunger completely.It leaves a pleasant feeling."
        },
        {
            img:p4,
            name:"Margherita Pizza",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:p6,
            name:"Pepperoni Pizza",
            des:"Well-cooked food pleases the taste buds.Every bite feels special."
        }
    ]
    const Chinese =[
        {
            img:c1,
            name:"Manchurian",
            des:"Delicious food is rich in flavor and aroma.It makes every meal enjoyable."
        },
        {
            img:c2,
            name:"Hakka Noodles",
            des:"Tasty food looks appealing and smells great.It excites the senses."
        },
        {
            img:c3,
            name:"Manchow Soup",
            des:"Fresh ingredients improve the taste.They make food healthier and better."
        },
        {
            img:c4,
            name:"Spring Rolls",
            des:"Good food satisfies hunger completely.It leaves a pleasant feeling."
        },
        {
            img:c5,
            name:"Tomato Soup",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:c6,
            name:"Cheese Balls",
            des:"Well-cooked food pleases the taste buds.Every bite feels special."
        }
    ]
    const Bakery =[
        {
            img:b1,
            name:"Cookies",
            des:"Delicious food is rich in flavor and aroma.It makes every meal enjoyable."
        },
        {
            img:b2,
            name:"Cake",
            des:"Tasty food looks appealing and smells great.It excites the senses."
        },
        {
            img:b3,
            name:"Macarons",
            des:"Fresh ingredients improve the taste.They make food healthier and better."
        },
        {
            img:b4,
            name:"Bundt Cake",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:b5,
            name:"Panna Cotta",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:b6,
            name:"Choco Truffle Pastry",
            des:"Well-cooked food pleases the taste buds.Every bite feels special."
        }
    ]
    const Salad =[
        {
            img:s1,
            name:"Greek Salad",
            des:"Delicious food is rich in flavor and aroma.It makes every meal enjoyable."
        },
        {
            img:s2,
            name:"Veg Salad",
            des:"Tasty food looks appealing and smells great.It excites the senses."
        },
        {
            img:s3,
            name:"Fruit Salad",
            des:"Fresh ingredients improve the taste.They make food healthier and better."
        },
        {
            img:s4,
            name:"Sprouts Salad",
            des:"Good food satisfies hunger completely.It leaves a pleasant feeling."
        },
        {
            img:s5,
            name:"Veg Paneer Salad",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:s6,
            name:"Green Salad",
            des:"Well-cooked food pleases the taste buds.Every bite feels special."
        }
    ]
    const Drinks =[
        {
            img:d1,
            name:"DragonFruit Mocktail",
            des:"Delicious food is rich in flavor and aroma.It makes every meal enjoyable."
        },
        {
            img:d2,
            name:"Classic Cocktail",
            des:"Tasty food looks appealing and smells great.It excites the senses."
        },
        {
            img:d3,
            name:"Lemonade",
            des:"Fresh ingredients improve the taste.They make food healthier and better."
        },
        {
            img:d4,
            name:"Mint Lemonade",
            des:"Good food satisfies hunger completely.It leaves a pleasant feeling."
        },
        {
            img:d5,
            name:"Watermelon Cooler",
            des:"Delicious meals bring comfort and happiness.They create good memories."
        },
        {
            img:d6,
            name:"Aam Panna",
            des:"Well-cooked food pleases the taste buds.Every bite feels special."
        }
    ]

const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };


  return (
     <Box sx={{backgroundImage:`url(${mbimg})`,height:1100,backgroundSize:"cover",backgroundRepeat:"no-repeat",mt:-8}}>
      <Container>
        {/* <Typography sx={{color:"#CC3333",fontWeight:600,fontSize:20,display:"flex",justifyContent:"center",mt:10,pt:8,fontFamily:"Lobster Two, cursive"  }}>Special Menu</Typography> */}
        <Typography sx={{fontSize:38,fontWeight:600,display:"flex",justifyContent:"center",mt:10,mb:5,pt:2}}>Our Food Gallery</Typography>

    {/* <Box
      sx={{
        bgcolor: '#FFFFFD',
        width: 1140,
        position: 'relative',
        minHeight: 200,
      }}
    > */}
      <AppBar position="static" color="#CC3333" sx={{boxShadow:"none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#CC3333"
          textColor="#CC3333"
          variant="fullWidth"
          aria-label="action tabs example"
        >
        
          <Tab label="All" sx={{fontSize:22,color:"#4c4e50ff",fontWeight:500,'&:hover':{color:"#CC3333",borderBottom:"2px solid #CC3333"}}} {...a11yProps(0)} />
          <Tab label="Pizza" sx={{fontSize:22,color:"#4c4e50ff",fontWeight:500,'&:hover':{color:"#CC3333",borderBottom:"2px solid #CC3333"}}} {...a11yProps(1)} />
          <Tab label="Chinese" sx={{fontSize:22,color:"#4c4e50ff",fontWeight:500,'&:hover':{color:"#CC3333",borderBottom:"2px solid #CC3333"}}} {...a11yProps(2)} />
          <Tab label="Bakery" sx={{fontSize:22,color:"#4c4e50ff",fontWeight:500,'&:hover':{color:"#CC3333",borderBottom:"2px solid #CC3333"}}} {...a11yProps(3)} />
          <Tab label="Salad" sx={{fontSize:22,color:"#4c4e50ff",fontWeight:500,'&:hover':{color:"#CC3333",borderBottom:"2px solid #CC3333"}}} {...a11yProps(4)} />
          <Tab label="Drink" sx={{fontSize:22,color:"#4c4e50ff",fontWeight:500,'&:hover':{color:"#CC3333",borderBottom:"2px solid #CC3333"}}} {...a11yProps(5)} />
        </Tabs> 
      </AppBar>
      <Divider sx={{ borderBottomWidth: 2, borderColor:'#4c4e50ff',mt:2 }} />
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box className='row' sx={{mt:5}}>
        {menu.map((item,index)=>{
          return(
             <Box className='col-12 col-lg-4 col-md-6 col-sm-12'>
                                    <Card sx={{ maxWidth: 345 ,mt:5}}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{'&:hover':{color:'#CC3333'}}}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.des}
        </Typography>
      </CardContent>
    </Card>
            </Box>
          )
        })}
           
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
         <Box className='row' sx={{mt:5}}>
        {pizza.map((item,index)=>{
          return(
             <Box className='col-12 col-lg-4 col-md-6 col-sm-12'>
                                    <Card sx={{ maxWidth: 345 ,mt:5}}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{'&:hover':{color:'#CC3333'}}}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {item.des}
        </Typography> 
      </CardContent>
    </Card>
            </Box>
          )
        })}
           
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
         <Box className='row' sx={{mt:5}}>
        {Chinese.map((item,index)=>{
          return(
             <Box className='col-12 col-lg-4 col-md-6 col-sm-12'>
                                    <Card sx={{ maxWidth: 345 ,mt:5}}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{'&:hover':{color:'#CC3333'}}}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {item.des}
        </Typography>
      </CardContent>
    </Card>
            </Box>
          )
        })}
           
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
         <Box className='row' sx={{mt:5}}>
        {Bakery.map((item,index)=>{
          return(
             <Box className='col-12 col-lg-4 col-md-6 col-sm-12'>
                                    <Card sx={{ maxWidth: 345 ,mt:5}}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{'&:hover':{color:'#CC3333'}}}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       {item.des}
        </Typography>
      </CardContent>
    </Card>
            </Box>
          )
        })}
           
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
         <Box className='row' sx={{mt:5}}>
        {Salad.map((item,index)=>{
          return(
             <Box className='col-12 col-lg-4 col-md-6 col-sm-12'>
                  <Card sx={{ maxWidth: 345 ,mt:5}}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{'&:hover':{color:'#CC3333'}}}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {item.des}
        </Typography>
      </CardContent>
    </Card>
            </Box>
          )
        })}
           
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
         <Box className='row' sx={{mt:5}}>
        {Drinks.map((item,index)=>{
          return(
             <Box className='col-12 col-lg-4 col-md-6 col-sm-12'>
                                    <Card sx={{ maxWidth: 345 ,mt:5}}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{'&:hover':{color:'#CC3333'}}}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {item.des}
        </Typography>
      </CardContent>
    </Card>
            </Box>
          )
        })} 
        </Box>
      </TabPanel>
      
    {/* </Box> */}
    </Container>
    </Box>
  )
}

export default Gallery1