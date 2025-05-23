
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UpiCard } from '@/components/upi/UpiCard';
import { TransactionCard } from '@/components/transactions/TransactionCard';
import { BalanceOverview } from '@/components/analytics/BalanceOverview';
import { mockUpiIds, mockTransactions, mockBalanceData, mockCurrentBalance } from '@/utils/mock-data';
import { CreditCard, QrCode, ArrowUpRight, ArrowDownLeft, Plus, TrendingUp, Gift, Zap } from 'lucide-react';

const Dashboard = () => {
  // Get the latest 3 transactions for the dashboard
  const recentTransactions = mockTransactions.slice(0, 3);
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome to <span className="text-flexipay-purple">Flexi</span><span className="text-flexipay-blue">Pay</span></h1>
      </div>
      
      <Card className="bg-gradient-to-r from-flexipay-light-purple to-flexipay-purple/5 border-flexipay-purple/20 overflow-hidden relative">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-flexipay-purple/10 rounded-full blur-xl"></div>
        <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-flexipay-blue/10 rounded-full blur-xl"></div>
        <CardContent className="p-6 relative">
          <BalanceOverview balanceData={mockBalanceData} currentBalance={mockCurrentBalance} />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1 card-hover bg-gradient-to-br from-white to-flexipay-light-purple border-flexipay-purple/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <QrCode className="h-5 w-5 mr-2 text-flexipay-purple" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full bg-gradient-to-r from-flexipay-purple to-flexipay-blue text-white hover:opacity-90" asChild>
              <a href="/scan">
                <QrCode className="h-4 w-4 mr-2" />
                <span>Scan QR</span>
              </a>
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="border-flexipay-purple/30 hover:bg-flexipay-purple/10" asChild>
                <a href="/upi">
                  <ArrowUpRight className="h-4 w-4 mr-2 text-flexipay-purple" />
                  <span>Pay</span>
                </a>
              </Button>
              <Button variant="outline" className="border-flexipay-blue/30 hover:bg-flexipay-blue/10" asChild>
                <a href="/upi">
                  <ArrowDownLeft className="h-4 w-4 mr-2 text-flexipay-blue" />
                  <span>Request</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 md:col-span-2 card-hover bg-gradient-to-br from-white to-flexipay-light-purple/30 border-flexipay-purple/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-flexipay-purple" />
                <span>My UPI IDs</span>
              </div>
              <Button size="sm" variant="outline" className="border-flexipay-purple/30 hover:bg-flexipay-purple/10" asChild>
                <a href="/upi">
                  <Plus className="h-4 w-4 mr-1" />
                  <span>Add</span>
                </a>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {mockUpiIds.slice(0, 2).map((upi) => (
                <UpiCard 
                  key={upi.id}
                  id={upi.id}
                  name={upi.name}
                  bank={upi.bank}
                  isDefault={upi.isDefault}
                  lastUsed={upi.lastUsed}
                />
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full text-flexipay-purple hover:text-flexipay-purple/80 hover:bg-flexipay-purple/10" asChild>
              <a href="/upi">View all UPI IDs</a>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1 md:col-span-2 card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Recent Transactions</span>
              <Button variant="ghost" size="sm" className="text-flexipay-purple hover:text-flexipay-purple/80 hover:bg-flexipay-purple/10" asChild>
                <a href="/history">View All</a>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {recentTransactions.map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </CardContent>
        </Card>
        
        <Card className="col-span-1 card-hover bg-gradient-to-br from-flexipay-blue/5 to-flexipay-purple/5 border-flexipay-purple/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-flexipay-blue" />
              Quick Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Spending Trend</p>
                <p className="font-medium">12% less than last week</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Gift className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rewards Available</p>
                <p className="font-medium">200 points to redeem</p>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-flexipay-blue to-flexipay-purple text-white hover:opacity-90" asChild>
              <a href="/analytics">
                <span>Full Analytics</span>
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  );
};

export default Index;
