'use client'

import { makeStyles } from '@material-ui/core/styles';
import { Card, Text, Bold, Button  } from "@tremor/react";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import { SelectBox, SelectBoxItem } from "@tremor/react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import "react-datepicker/dist/react-datepicker.css";

import { TextInput } from "@tremor/react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    maxWidth: 240,
    minHeight: 30,  
    backgroundColor: '#ffffff',
    boxShadow: '0 0 0 0',
    borderRadius: '5px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Cards( { etiqueta,darkMode, showCalendar, search ,clickSearch} ) {
  
  const classes = useStyles();

    return ( 
      <>
      {etiqueta === 'Presencial/Teletrabajo' ? (
        <Card className= {`max-w-xs ml-10 mr-5 mt-5 ${darkMode ? 'bg-darkAzul' : 'bg-blue-100' }`}
         decoration="top" decorationColor="indigo" >
        <Text className={`ml-3 mt-5  ${darkMode ? 'text-white' : 'text-black-300' }`}>{etiqueta}</Text>
        <MultiSelectBox className="p-3" placeholder="Modalidad">
        <MultiSelectBoxItem  value="1" text="Híbrido" />
        <MultiSelectBoxItem  value="2" text="Presencial" />
        <MultiSelectBoxItem  value="3" text="Sin especificar" />
        <MultiSelectBoxItem  value="4" text="Solo teletrabajo" />
        </MultiSelectBox>
        </Card>
      ) : null }
   {etiqueta === 'Categorías' ? (
        <Card className={`max-w-xs ml-10 mr-5 mt-5 ${darkMode ? 'bg-darkAzul' : 'bg-blue-100' }`}
         decoration="top" decorationColor="indigo">
          <Text className={`ml-3 mt-5  ${darkMode ? 'text-white' : 'text-black-300' }`}>{etiqueta}</Text>
          <div className="max-w-sm ">
          <FormControl variant="outlined" className={classes.formControl}  >
        <InputLabel id="demo-simple-select-filled-label"></InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={search}
        >
        
          <MenuItem value={"0"}></MenuItem>
          <MenuItem value={"1"}> Administración Pública </MenuItem>
          <MenuItem value={"2"}> Administración de empresas</MenuItem>
          <MenuItem value={"3"}> Atención a clientes </MenuItem>
          <MenuItem value={"4"}> Calidad, producción e I+D </MenuItem>
          <MenuItem value={"5"}> Comercial y ventas </MenuItem>
          <MenuItem value={"6"}> Compras, logística y almacén</MenuItem>
          <MenuItem value={"7"}> Diseño y artes gráficas </MenuItem>
          <MenuItem value={"8"}> Educación y formación </MenuItem>
          <MenuItem value={"9"}> Finanzas y banca </MenuItem>
          <MenuItem value={"10"}> Informática y telecomunicaciones</MenuItem>
          <MenuItem value={"11"}> Ingenieros y técnicos </MenuItem>
          <MenuItem value={"12"}> Inmobiliario y construcción </MenuItem>
          <MenuItem value={"13"}> Legal </MenuItem>
          <MenuItem value={"14"}> Marketing y comunicación </MenuItem>
          <MenuItem value={"15"}> Profesiones, artes y oficios </MenuItem>
          <MenuItem value={"16"}> Recursos humanos </MenuItem>
          <MenuItem value={"17"}> Sanidad y salud </MenuItem>
          <MenuItem value={"18"}> Sector Farmacéutico </MenuItem>
          <MenuItem value={"19"}> Turismo y restauración </MenuItem>
          <MenuItem value={"20"}> Ventas al detalle </MenuItem>
          <MenuItem value={"21"}> Otros </MenuItem>
        </Select>
      </FormControl>
    </div>
   
        </Card>
      ) : null}
 {etiqueta === 'Agenda de Entrevistas' ? (
        <Card className= {`max-w-xs ml-10 mr-5 mt-5 ${darkMode ? 'bg-white-100' : 'bg-white-200' }`}
         decoration="top" decorationColor="indigo" >
        <Text className={`ml-3 mt-5  ${darkMode ? 'text-white' : 'text-black-300' }`}>{etiqueta}</Text>

        <Button className="p-2 ml-20 mt-5 text-white bg-orange-400" size="xs" onClick={showCalendar}>
           CALENDARIO
        </Button>
       
        </Card>
      ) : null }
 {etiqueta === 'Localizado en' ? (
        <Card className= {`max-w-xs ml-10 mr-5 mt-5 ${darkMode ? 'bg-darkAzul' : 'bg-blue-100' }`}
         decoration="top" decorationColor="indigo" >
        <Text className={`ml-3 mt-5  ${darkMode ? 'text-white' : 'text-black-300' }`}>{etiqueta}</Text>
        <div className="max-w-sm mx-auto ">
          <FormControl variant="outlined" className={classes.formControl}  >
        <InputLabel id="demo-simple-select-filled-label"></InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={search}
        >
        <MenuItem value={"0"}> </MenuItem>
        <MenuItem value={"1"}> Toda España </MenuItem>
        <MenuItem value={"2"}> En el extranjero </MenuItem>
        <MenuItem value={"3"}> Madrid </MenuItem>
        <MenuItem value={"4"}> Barcelona </MenuItem>
        <MenuItem value={"5"}> Valencia/València </MenuItem>
        <MenuItem value={"6"}> Sevilla </MenuItem>
        <MenuItem value={"7"}> A Coruña </MenuItem>
        <MenuItem value={"8"}> Álava/Araba </MenuItem>
        <MenuItem value={"9"}> Albacete</MenuItem>
        <MenuItem value={"10"}> Alicante/Alacant </MenuItem>
        <MenuItem value={"11"}> Almería </MenuItem>
        <MenuItem value={"12"}> Asturias </MenuItem>
        <MenuItem value={"13"}> Ávila </MenuItem>
        <MenuItem value={"14"}> Badajoz</MenuItem>
        <MenuItem value={"15"}> Barcelona </MenuItem>
        <MenuItem value={"16"}> Burgos</MenuItem>
        <MenuItem value={"17"}> Cáceres </MenuItem>
        <MenuItem value={"18"}> Cádiz</MenuItem>
        <MenuItem value={"19"}> Cantabria </MenuItem>
        <MenuItem value={"20"}> Castellón/Castelló</MenuItem>
        <MenuItem value={"21"}> Ceuta </MenuItem>
        <MenuItem value={"22"}> Ciudad Real</MenuItem>
        <MenuItem value={"23"}> Córdoba</MenuItem>
        <MenuItem value={"24"}> Cuenca</MenuItem>
        <MenuItem value={"25"}> Girona</MenuItem>
        <MenuItem value={"26"}> Granada </MenuItem>
        <MenuItem value={"27"}> Guadalajara </MenuItem>
        <MenuItem value={"29"}> Guipúzcoa/Gipuzkoa</MenuItem>
        <MenuItem value={"30"}> Huelva </MenuItem>
        <MenuItem value={"31"}> Huesca </MenuItem>
        <MenuItem value={"32"}> Islas Baleares/Illes Balears</MenuItem>
        <MenuItem value={"33"}> Jaén</MenuItem>
        <MenuItem value={"34"}> La Rioja</MenuItem>
        <MenuItem value={"35"}> Las Palmas</MenuItem>
        <MenuItem value={"36"}> León </MenuItem>
        <MenuItem value={"37"}> Lleida </MenuItem>
        <MenuItem value={"38"}> Lugo </MenuItem>
        <MenuItem value={"39"}> Madrid</MenuItem>
        <MenuItem value={"40"}> Málaga </MenuItem>
        <MenuItem value={"41"}> Melilla </MenuItem>
        <MenuItem value={"42"}> Murcia</MenuItem>
        <MenuItem value={"43"}> Navarra</MenuItem>
        <MenuItem value={"44"}> Ourense</MenuItem>
        <MenuItem value={"45"}> Palencia </MenuItem>
        <MenuItem value={"46"}> Pontevedra </MenuItem>
        <MenuItem value={"47"}> Salamanca </MenuItem>
        <MenuItem value={"48"}> Santa Cruz de Tenerife</MenuItem>
        <MenuItem value={"49"}> Segovia</MenuItem>
        <MenuItem value={"50"}> Sevilla </MenuItem>
        <MenuItem value={"51"}> Soria </MenuItem>
        <MenuItem value={"52"}> Tarragona </MenuItem>
        <MenuItem value={"53"}> Teruel </MenuItem>
        <MenuItem value={"54"}> Toledo </MenuItem>
        <MenuItem value={"55"}> Valencia/València</MenuItem>
        <MenuItem value={"56"}> Valladolid </MenuItem>
        <MenuItem value={"57"}> Vizcaya/Bizkaia </MenuItem>
        <MenuItem value={"58"}> Zamora </MenuItem>
        <MenuItem value={"59"}> Zaragoza </MenuItem>
    
      </Select>
      </FormControl>
      </div>
        </Card>
      ) : null }
       {etiqueta === 'Busco ofertas de...' ? (
        <Card className= {`max-w-xs ml-10 mr-5 mt-5 ${darkMode ? 'bg-orange-700' : 'bg-orange-200' }`}
         decoration="top" decorationColor="indigo" >
        <div className="flex-container">
        <Text className={`ml-3 mt-5  ${darkMode ? 'text-white' : 'text-black-300' }`}>{etiqueta}</Text>
        <Button className="p-2  text-white bg-orange-500" size="xs" onClick={clickSearch}>
           BUSCAR
        </Button>
        </div>
        <div className="max-w-sm mx-auto space-y-6 pl-1 pr-1 mr-1 ml-1 pt-3">
            <TextInput onChange={search} className="p-3" placeholder=" Puesto, empresa o palabra clave" />
        </div>
        </Card>
      ) : null }
       {etiqueta === 'Tu estado' ? (
        <Card className= {`max-w-xs ml-10 mr-5 mt-5 ${darkMode ? 'bg-darkAzul' : 'bg-white-100' }`}
         decoration="top" decorationColor="indigo" >
        <Text className={`ml-3 mt-5  ${darkMode ? 'text-white' : 'text-black-300' }`}>{etiqueta}</Text>
        <Bold className={`ml-3 mt-1 text-inf ${darkMode ? 'text-white' : 'text-black-300' }`}>3 candidaturas activas</Bold>
        <Text className={`ml-3 mt-1 text-inf ${darkMode ? 'text-white' : 'text-black-300' }`}>Hay novedades en tus candidaturas</Text>
        <Text className={`ml-3 mt-1 text-inf ${darkMode ? 'text-white' : 'text-black-300' }`}>Ir a Candidaturas</Text>
        </Card>
      ) : null }
    </>
  );
    }



