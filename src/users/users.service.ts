import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/interfaces/user.interface';


    const users:User[]=[
        {
            id:1,
            username:'Adrian',
            fullname:'Ojeda',
            email: 'aojeda@claro.com.ar',
            password: '123456'
        },
        {
            id:2,
            username:'Adrian',
            fullname:'Ojeda',
            email: 'aojeda@claro.com.ar',
            password: '123456'
        },
        {
            id:3,
            username:'Adrian',
            fullname:'Ojeda',
            email: 'aojeda@claro.com.ar',
            password: '123456',
        },
        {
            id:4,
            username:'Adrian',
            fullname:'Ojeda',
            email: 'aojeda@claro.com.ar',
            password: '123456'
        }



    ]




@Injectable()
export class UsersService {

    findAll(){
        return users;
    }

    findById(id:number){
        console.log('id');
        console.log(id)
        let res = users.find(element => element.id === id);
        console.log('res');
        console.log(res);
        return res;

    }
    create(createUserDto:CreateUserDto){
        const _user:User = {
            id:4,
            ...createUserDto
        }

        users.push(_user);

        return _user;
    }

    update(){

    }  
    }
