import { Box, Container, Typography } from "@mui/material";
import React from "react";
import box1 from "../Assets/images/box1.png";
import box2 from "../Assets/images/box2.png";
import box3 from "../Assets/images/box3.png";
import box4 from "../Assets/images/box4.png";
import { Link } from "react-router-dom";



const Discover = () => {

    const card =[
        {
            img:box1,
            name:"100% Swiss Quality"
        },
        {
            img:box2,
            name:"Organic Production"
        },
        {
            img:box3,
            name:"Food Law Certified"
        },
         {
            img:box4,
            name:"Food Production"
        }
    ]

  return (
    <Box>
      <Container>
        <Box className="row" sx={{ display: "flex", gap: -1 }}>
          {card.map((item,index) => {
            return(
                <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                <Box
              sx={{
                height: 310,
                width: 280,
                mt: 15,
                border: "2px solid #ddd",
                textAlign: "center",
                "&:hover": {
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
            <img
                src={item.img}
                style={{ height: 90, width: 90, marginTop: 17 }}
              ></img>
              <Typography sx={{ fontSize: 22, fontWeight: 600, mt: 1.5,"&:hover":{
                color:"#CC3333"
              }}}>
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "grey", mt: 1 }}>
                Lorem ipsum dol consectetur <br />
                adipiscing elit, sed eiusmod tempor <br />
                incididunt ut labore dolore magna <br />
                aliqua
              </Typography>
            <Link to='/discovermain' style={{textDecoration:"none"}}>
                  <Typography sx={{ mt: 2, fontSize: 17 ,"&:hover":{color:"#CC3333"}}}>
                ◆ Discover More ◆
              </Typography>
            </Link>
            </Box>
          </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Discover;
