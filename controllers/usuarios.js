const {response} = require('express');

const usuariosGet = (req, res = response) => {
    const {q,nombre= "no hay nombre"}=req.query;

    res.json({
        ok:true,
        msg:'put API - controlador'
        ,q
        , nombre
    })
}


const usuariosPost = (req, res = response) => {
    const {nombre,edad}=req.body;

    res.json({
        ok:true,
        msg:'put Post - controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {
    const id=req.params.id;
    res.json({
        ok:true,
        msg:'put Put - controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg:'put Delete - controlador'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg:'put Patch - controlador'
    })
}

module.exports =
{
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
    usuariosPatch
}