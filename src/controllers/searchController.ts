import {Request, Response} from 'express';
import {Pet} from '../models/pet';
import {createMenuObjetct} from '../helpers/createMenuObject';


export const search = (req: Request, res:Response) =>{

    let query: string = req.query.q as string;
    let list = Pet.getFromName(query);

    if(!query){
        res.redirect('/');
        return;
    }

    res.render('pages/page',{
        menu: createMenuObjetct(''),
        list,
        query
    });
}