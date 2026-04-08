import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WithdrawalsService {
  constructor(private prisma: PrismaService) {}

  async processWithdrawal(userId: number, itemsToWithdraw: any[]) {
    // Lógica transaccional ACID
    return this.prisma.$transaction(async (tx) => {
      const order = await tx.withdrawalOrder.create({
        data: { userId, status: 'PENDING_PAYMENT' }
      });
      return { success: true, orderId: order.id };
    });
  }
}
