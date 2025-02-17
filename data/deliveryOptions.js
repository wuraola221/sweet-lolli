export const deliveryOptions = [{
 id : '1',
 deliveryDays : 0,
 priceCents : 0
}];

export function getDeliveryOption(deliveryOptionId) {
 let deliveryOption;

 deliveryOptions.forEach((option) => {
   if (option.id === deliveryOptionId) {
     deliveryOption = option;
   }
 });

 return deliveryOption || deliveryOptions[0];
}