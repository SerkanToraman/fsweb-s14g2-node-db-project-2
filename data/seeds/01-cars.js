// ESNEK
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()   //del sadece datayı siler, truncate data + metadata'yı siler.
  await knex('cars').insert([
    { 
        id : 1,
        vin: "24053203", 
        make: 'Audi', 
        model: 'Q3', 
        mileage: 25000, 
        title:"Temiz", 
        transmission:"Automatic"
      },
      {  
         id: 2,
         vin: "12334324", 
         make: 'VW', 
         model: 'T-Roc', 
         mileage: 10000, 
         title:"Tampunda çizik", 
         transmission:"Automatic"
      },
      {  
        id:3,
        vin: "12334321", 
        make: 'Mercedes', 
        model: 'GLA', 
        mileage: 4000, 
        title:"Temiz", 
        transmission:"Automatic"
     },
  ]);
};
