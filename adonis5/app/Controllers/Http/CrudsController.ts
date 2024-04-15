import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Crud from 'App/Models/Crud'

export default class CrudsController {
  public async index({ response }: HttpContextContract) {

    const data = await Crud.all()
    return response.json({ data });

  }

  public async create({ }: HttpContextContract) {

  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.all();
    const t = await Crud.create(data)
    t.save()

  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ request, params }: HttpContextContract) {

    const data = await Crud.find(params.id)
    const editData = await request.all();

    data?.merge(editData)

    data?.save()

  }

  public async destroy({ request, params }: HttpContextContract) {

    const data = await Crud.find(params.id);
    console.log(data)
    data?.delete()

  }
}
