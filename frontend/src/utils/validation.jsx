

export const validation=(data)=>{
    console.log(data)
    for(let i=0;i<data.length ; i++){   


        if(data[i].text==="") return "Text field cannot be Empty";

        if(data[i].text?.length<4 || data[i].text?.length >10) return "Text character should be between 4 and 10"
    }

    return null;
}

export const signUpValidation=(password,conFirmPassword)=>{

    if(password!==conFirmPassword) return "Password Cannot be Matched"

    return null;

}