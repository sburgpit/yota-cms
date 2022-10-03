import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-prodict.dto'
import { Product, ProductDocument } from './schemas/product.schema'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(dto)
    return newProduct.save()
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findOneAndRemove(id as any)
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true })
  }
}
