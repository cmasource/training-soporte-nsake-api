import { Controller, Get, Post, Param, Patch, Delete,ParseIntPipe, UsePipes, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
/*import { User } from '../interfaces/user.interface';*/
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @Get()
     findAll(){
        return this.userService.findAll();
    }
    @Get(':id')
    findById(@Param('id',ParseIntPipe) id:number){
        return this.userService.findById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Patch()
    update(@Param('id',ParseIntPipe) id:number, @Body() createUserDto:CreateUserDto){
        return 'update';
    }

    @Delete()
    delete(){
        return 'delete';
    }

}
