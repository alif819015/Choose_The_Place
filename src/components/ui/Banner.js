"use client";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "@/assets/1.jpg";

// icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Banner = () => {
  return (
    <Container className="px-0">
      <div className="grid grid-cols-2 gap-5 py-5 ">
        <div>
          <h1>content</h1>
        </div>
        <div class="grid grid-rows-6 grid-flow-col gap-4">
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
            <div class="row-start-2"></div>
          </div>
          <div className="grid-rows-subgrid row-span-3 h-[285px] w-[183px]">
            <Image
              className="rounded-xl h-full w-full"
              src={img1}
              alt="1"
              height={100}
              width={100}
            ></Image>
          </div>
          <div className="flex justify-between items-center">
            <ArrowBackIosIcon />
            <Typography>button</Typography>
            <span className="rotate-180">
              <ArrowBackIosIcon />
            </span>
          </div>
          <div></div>
          <div className="grid-rows-subgrid row-span-3">
            <Image
              className="rounded-xl h-full w-full"
              src={img1}
              alt="1"
              height={100}
              width={100}
            ></Image>
          </div>
          <div className="grid-rows-subgrid row-span-2">
            <Image
              className="rounded-xl h-full w-full"
              src={img1}
              alt="1"
              height={100}
              width={100}
            ></Image>
          </div>
          <div className="grid-rows-subgrid row-span-3">
            <Image
              className="rounded-xl h-full w-full"
              src={img1}
              alt="1"
              height={100}
              width={100}
            ></Image>
          </div>
          <div className="grid-rows-subgrid row-span-3">
            <Image
              className="rounded-xl h-full w-full"
              src={img1}
              alt="1"
              height={200}
              width={100}
            ></Image>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
