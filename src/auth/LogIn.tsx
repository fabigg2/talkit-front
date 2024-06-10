import { CloudUploadIcon, Lock, LogInIcon, Mail, MessageCircle } from "lucide-react";
import "./styles/index.scss";
import logo from "../assets/login/login-icon.png";
import { Input } from "@/components/ui/input";
import { Button } from "@mui/material";
const LogIn = () => {
  return (
    <div
      className="flex items-center content-center justify-center w-screen h-screen bg-slate-500"
      id="bg-loing"
    >
      <div className=" flex flex-col space-y-3 items-center justify-center w-[350px] h-[500px] rounded-xl bg-blur-form primary-gradient ">
        <MessageCircle color="#ffffff" />
        <div className="flex flex-row items-center px-8">
          <h2 className=" text-[#ffffff] text-4xl font-bold">Hola de nuevo</h2>
          <img src={logo} alt="" className="w-[150px]" />
        </div>
        <div className=" relative w-5/6">
          <Mail color="#ffffff" className="fixed mt-2 ml-2 rounded-xl" />
          <Input className=" bg-black opacity-50 rounded-xl text-[#ffffff] pl-10" />
        </div>
        <div className=" relative w-5/6">
          <Lock color="#ffffff" className="fixed mt-2 ml-2 rounded-xl" />
          <Input className=" bg-black opacity-50 rounded-xl text-[#ffffff] pl-10" />
        </div>
        <div className="flex flex-row flex-">
          <Button variant="outlined" color="primary" startIcon={<LogInIcon />}>Iniciar session</Button>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            color="error"
            
          >
             Clrear cuenta
          </Button>
        </div>
        <p>Olvide mi contraseña</p>
        <div>Ingresar con google</div>
      </div>
    </div>
  );
};

export default LogIn;
