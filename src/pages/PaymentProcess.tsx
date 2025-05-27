
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';

const PaymentProcess = () => {
  const [searchParams] = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState('mobile-money');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    provider: 'mtn',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bankName: '',
    accountNumber: '',
  });

  const packageType = searchParams.get('package') || 'basic';
  const packages = {
    basic: { name: 'Basic Package', price: 'UGX 100,000', features: ['Website Design', 'Responsive Layout', 'Basic SEO Setup', '1 Month Support'] },
    professional: { name: 'Professional Package', price: 'UGX 300,000', features: ['Full Website Development', 'Mobile App Design', 'Advanced SEO', '3 Months Support', 'Logo Design'] },
    enterprise: { name: 'Enterprise Package', price: 'UGX 500,000', features: ['Complete Digital Solution', 'E-commerce Integration', 'Custom Features', '6 Months Support', 'Brand Identity Package'] }
  };

  const selectedPackage = packages[packageType as keyof typeof packages];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email) {
      toast.error('Please fill in your name and email');
      return false;
    }

    if (selectedMethod === 'mobile-money' && !formData.phone) {
      toast.error('Please enter your phone number');
      return false;
    }

    if (selectedMethod === 'credit-card') {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        toast.error('Please fill in all card details');
        return false;
      }
    }

    if (selectedMethod === 'bank' && (!formData.bankName || !formData.accountNumber)) {
      toast.error('Please fill in bank details');
      return false;
    }

    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      let paymentMessage = '';
      switch (selectedMethod) {
        case 'mobile-money':
          paymentMessage = `Payment request sent to ${formData.provider.toUpperCase()} ${formData.phone}. Please check your phone for payment prompt.`;
          break;
        case 'paypal':
          paymentMessage = 'Redirecting to PayPal for payment processing...';
          break;
        case 'credit-card':
          paymentMessage = 'Credit card payment processed successfully!';
          break;
        case 'bank':
          paymentMessage = 'Bank transfer details sent to your email. Please complete the transfer.';
          break;
      }

      toast.success(paymentMessage);
      
      // Send confirmation email (simulated)
      console.log('Sending payment confirmation to:', {
        email: 'katoj589@gmail.com',
        customerEmail: formData.email,
        package: selectedPackage.name,
        amount: selectedPackage.price,
        method: selectedMethod,
        customerDetails: formData
      });

    } catch (error) {
      toast.error('Payment processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Complete Your <span className="text-portfolio-accent">Payment</span>
                </h1>
                <p className="text-gray-300">Secure payment processing for your selected package</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Package Summary */}
                <div className="bg-portfolio-dark rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Order Summary</h2>
                  <div className="border-b border-gray-700 pb-4 mb-4">
                    <h3 className="text-xl text-portfolio-accent font-medium">{selectedPackage.name}</h3>
                    <p className="text-2xl font-bold text-white mt-2">{selectedPackage.price}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-gray-300 font-medium">Includes:</h4>
                    {selectedPackage.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <i className='bx bx-check text-portfolio-accent'></i>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Form */}
                <div className="bg-portfolio-dark rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">Payment Details</h2>
                  
                  {/* Customer Information */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-portfolio-darker border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="bg-portfolio-darker border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-4">Payment Method</label>
                    <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 p-3 border border-gray-600 rounded-lg">
                          <RadioGroupItem value="mobile-money" id="mobile-money" />
                          <label htmlFor="mobile-money" className="text-white cursor-pointer flex items-center gap-2">
                            <i className='bx bx-mobile text-portfolio-accent'></i>
                            Mobile Money (MTN/Airtel)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-600 rounded-lg">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <label htmlFor="paypal" className="text-white cursor-pointer flex items-center gap-2">
                            <i className='bx bxl-paypal text-portfolio-accent'></i>
                            PayPal
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-600 rounded-lg">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <label htmlFor="credit-card" className="text-white cursor-pointer flex items-center gap-2">
                            <i className='bx bx-credit-card text-portfolio-accent'></i>
                            Credit/Debit Card
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-600 rounded-lg">
                          <RadioGroupItem value="bank" id="bank" />
                          <label htmlFor="bank" className="text-white cursor-pointer flex items-center gap-2">
                            <i className='bx bx-building text-portfolio-accent'></i>
                            Bank Transfer
                          </label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Payment Method Forms */}
                  {selectedMethod === 'mobile-money' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Provider</label>
                        <RadioGroup value={formData.provider} onValueChange={(value) => handleInputChange('provider', value)}>
                          <div className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mtn" id="mtn" />
                              <label htmlFor="mtn" className="text-white cursor-pointer">MTN</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="airtel" id="airtel" />
                              <label htmlFor="airtel" className="text-white cursor-pointer">Airtel</label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="0708419371"
                          className="bg-portfolio-darker border-gray-600 text-white"
                        />
                      </div>
                      <div className="bg-gray-800 p-3 rounded text-sm text-gray-300">
                        Payment will be sent to: <strong className="text-portfolio-accent">0708419371</strong>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'paypal' && (
                    <div className="bg-gray-800 p-4 rounded">
                      <p className="text-gray-300 text-sm">
                        You will be redirected to PayPal to complete your payment securely.
                        PayPal email: <strong className="text-portfolio-accent">katoj589@gmail.com</strong>
                      </p>
                    </div>
                  )}

                  {selectedMethod === 'credit-card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Card Number</label>
                        <Input
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className="bg-portfolio-darker border-gray-600 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Expiry Date</label>
                          <Input
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            className="bg-portfolio-darker border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">CVV</label>
                          <Input
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            placeholder="123"
                            className="bg-portfolio-darker border-gray-600 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'bank' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Bank Name</label>
                        <Input
                          value={formData.bankName}
                          onChange={(e) => handleInputChange('bankName', e.target.value)}
                          placeholder="Enter your bank name"
                          className="bg-portfolio-darker border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Account Number</label>
                        <Input
                          value={formData.accountNumber}
                          onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                          placeholder="Enter account number"
                          className="bg-portfolio-darker border-gray-600 text-white"
                        />
                      </div>
                      <div className="bg-gray-800 p-3 rounded text-sm text-gray-300">
                        Transfer details will be sent to: <strong className="text-portfolio-accent">katoj589@gmail.com</strong>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 space-y-4">
                    <Button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full bg-portfolio-accent hover:bg-red-600 text-white h-12 text-lg font-medium"
                    >
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <i className='bx bx-loader-alt animate-spin'></i>
                          Processing...
                        </div>
                      ) : (
                        `Pay ${selectedPackage.price}`
                      )}
                    </Button>
                    
                    <Link to="/payment" className="block text-center">
                      <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                        Back to Packages
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentProcess;
