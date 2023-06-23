'use strict';
//Write code logic to retreive Data From DB 

const express = require("express");

const sql = require("mssql");

const { pool } = require("../../dbFiles/dbConfig");

// -------------Get list of Invoices  ---------------
const getTeleInvoices = (req, res) => {

   pool.connect().then(() =>{
     const request = new sql.Request(pool);
     request
     .query("SELECT [Année] AS Annee,[Mois] AS Mois,[Numéro de facture] AS NumeroFacture,[ID/N° Tél] AS IDTel,[Votre offre] AS VotreOffre, [Nom Site] AS NomSite,[Total frais D'abonnement] AS TotalFraisAbonnement,[Consommation Supplémentaire] AS ConsommationSupplementaire,[Total autres opérations] AS TotalAutresOperations,[Total recharges] AS TotalRecharges, [Total remise] AS TotalRemise,[Somme totale] AS SommeTotale,[Total Impôts] AS TotalImpots, [Total à payer] AS TotalAPayer FROM MobileInvoices")
     .then((result) => {
       res.send(result.recordset);
     }).catch((err) => {
       console.error(err);
       res.status(500).send({ message: 'Error fetching users from database' })
 
       });
     }).catch((err) => {
   
        res.status(500).send({ message: 'Error connecting to database' })
 
     });
 
 }
// -------------Get list of Invoices Ends here ---------------

// async function  addTeleInvoice (req, res) {
  
//    try {

//    var {Année='2023',Mois='OCT',Numéro_de_facture='F-0321-1391228',ID_N_Tel='Default number', Votre_offre,Nom_Site,Total_frais_Dabonnement,Consommation_Supplémentaire,Total_autres_opérations,Total_recharges,Total_remise,Somme_totale,Total_Impôts,Total_payer} = req.body;
   
//    var query = "INSERT INTO [dbo].[MobileInvoices] ([Année],[Mois],[Numéro de facture],[ID/N° Tél],[Votre offre],[Nom Site],[Total frais D'abonnement],[Consommation Supplémentaire],[Total autres opérations],[Total recharges],[Total remise],[Somme totale],[Total Impôts],[Total à payer])VALUES(@Année,@Mois,@Numéro_de_facture,@ID_N_Tel,@Votre_offre,@Nom_Site,@Total_frais_Dabonnement,@Consommation_Supplémentaire,@Total_autres_opérations,@Total_recharges,@Total_remise,@Somme_totale,@Total_Impôts,@Total_payer)"
   
   
//    await pool.connect();
//          console.error("#######Error1",err);

   
//       var request = new sql.Request(pool);
//          request
//          .input("Année", sql.NVarChar(255),Année)
//          .input("Mois", sql.NVarChar(255),Mois)
//          .input("Numéro_de_facture",sql.NVarChar(128),Numéro_de_facture)
//          .input("ID_N_Tel", sql.NVarChar(128), ID_N_Tel)
//          .input("Votre_offre", sql.NVarChar(255),Votre_offre)
//          .input("Nom_Site", sql.NVarChar(255), Nom_Site)
//          .input("Total_frais_Dabonnement", sql.Float,Total_frais_Dabonnement)
//          .input("Consommation_Supplémentaire", sql.Float,Consommation_Supplémentaire)
//          .input("Total_autres_opérations", sql.Float,Total_autres_opérations)
//          .input("Total_recharges", sql.Float,Total_recharges)
//          .input("Total_remise", sql.Float,Total_remise)
//          .input("Somme_totale", sql.Float, Somme_totale)
//          .input("Total_Impôts", sql.Float, Total_Impôts)
//          .input("Total_payer", sql.Float,Total_payer)  ;


//          const result = await request.query(query);
//          console.log('result:', result);
//          res.status(200).send("Invoice saved successfully.");
//    }
//     catch (err) {
//      console.error('#######Error', err);
//      console.log(err);
//      res.status(500).send('Error while saving data. Please try again later.');
//    }
//  }
     


// async function addTeleInvoice(req, res) {
  
//      var { Année = '2023', Mois = 'OCT', Numéro_de_facture = 'F-0321-1391228', ID_N_Tel = 'Default number', Votre_offre, Nom_Site, Total_frais_Dabonnement, Consommation_Supplémentaire, Total_autres_opérations, Total_recharges, Total_remise, Somme_totale, Total_Impôts, Total_payer } = req.body;
 
//      var query = "INSERT INTO [dbo].[MobileInvoices] ([Année], [Mois], [Numéro de facture], [ID/N° Tél], [Votre offre], [Nom Site], [Total frais D'abonnement], [Consommation Supplémentaire], [Total autres opérations], [Total recharges], [Total remise], [Somme totale], [Total Impôts], [Total à payer]) VALUES (@Année, @Mois, @Numéro_de_facture, @ID_N_Tel, @Votre_offre, @Nom_Site, @Total_frais_Dabonnement, @Consommation_Supplémentaire, @Total_autres_opérations, @Total_recharges, @Total_remise, @Somme_totale, @Total_Impôts, @Total_payer)";
 
//      console.error("#######Error7");

//    await pool.connect().then(() =>{ 
//      console.error("#######Error1", err);
 
//     var request = new sql.Request(pool);
//      request
//        .input("Année", sql.NVarChar(255), Année)
//        .input("Mois", sql.NVarChar(255), Mois)
//        .input("Numéro_de_facture", sql.NVarChar(128), Numéro_de_facture)
//        .input("ID_N_Tel", sql.NVarChar(128), ID_N_Tel)
//        .input("Votre_offre", sql.NVarChar(255), Votre_offre)
//        .input("Nom_Site", sql.NVarChar(255), Nom_Site)
//        .input("Total_frais_Dabonnement", sql.Float, Total_frais_Dabonnement)
//        .input("Consommation_Supplémentaire", sql.Float, Consommation_Supplémentaire)
//        .input("Total_autres_opérations", sql.Float, Total_autres_opérations)
//        .input("Total_recharges", sql.Float, Total_recharges)
//        .input("Total_remise", sql.Float, Total_remise)
//        .input("Somme_totale", sql.Float, Somme_totale)
//        .input("Total_Impôts", sql.Float, Total_Impôts)
//        .input("Total_payer", sql.Float, Total_payer);
 
//        request.query(query)
//        .then((result) => {
//           console.log("result : ", result)
//    })
//    .catch((err) => {
//      console.log(err);
//      res.send("Error while saving data. Please try again later.");
//    });
// })
// .catch((err) => {
//  console.log(err);
//  res.status(500).send("Error while connecting to the database.");
// });
//    };






//--------------------Post methode to add an invoice--------------------

   async function addTeleInvoice(req, res) {

       const{  Annee = '2020',
         Mois ='OCT',
         NumeroFacture ='F-0321-1391228',
         IDTel = 'Default number',
         VotreOffre,
         NomSite,
         TotalFraisAbonnement,
         ConsommationSupplementaire,
         TotalAutresOperations,
         TotalRecharges,
         TotalRemise,
         SommeTotale,
         TotalImpots,
         TotalAPayer } = req.body;

         const query = "INSERT INTO [dbo].[MobileInvoices] ([Année], [Mois], [Numéro de facture], [ID/N° Tél], [Votre offre], [Nom Site], [Total frais D'abonnement], [Consommation Supplémentaire], [Total autres opérations], [Total recharges], [Total remise], [Somme totale], [Total Impôts], [Total à payer]) VALUES (@Annee, @Mois, @NumeroFacture, @IDTel, @VotreOffre, @NomSite, @TotalFraisAbonnement, @ConsommationSupplementaire, @TotalAutresOperations, @TotalRecharges, @TotalRemise, @SommeTotale, @TotalImpots, @TotalAPayer)";
      
         pool.connect().then(() => {
            const request = new sql.Request(pool);
            request
            .input("Annee", sql.NVarChar(255), Annee)
            .input("Mois", sql.NVarChar(255), Mois)
            .input("NumeroFacture", sql.NVarChar(128), NumeroFacture)
            .input("IDTel", sql.NVarChar(128), IDTel)
            .input("VotreOffre", sql.NVarChar(255), VotreOffre)
            .input("NomSite", sql.NVarChar(255), NomSite)
            .input("TotalFraisAbonnement", sql.Float, TotalFraisAbonnement)
            .input("ConsommationSupplementaire", sql.Float, ConsommationSupplementaire)
            .input("TotalAutresOperations", sql.Float, TotalAutresOperations)
            .input("TotalRecharges", sql.Float, TotalRecharges)
            .input("TotalRemise", sql.Float, TotalRemise)
            .input("SommeTotale", sql.Float, SommeTotale)
            .input("TotalImpots", sql.Float, TotalImpots)
            .input("TotalAPayer", sql.Float, TotalAPayer);
     
         
         request.query(query)
         .then((result) => {
            res.status(200).send({ message: 'Invoice saved successfully' })
            console.log("result : ", result)
         //   res.status(200).json{"message":"Invoice saved successfully."};
        

   
         })
         .catch((err) => {
           console.log(err);
           res
             .status(500)
             .send("Error while saving data. Please try again later.");
         });
     })
     .catch((err) => {
       console.log(err);
       res.status(500).send("Error while connecting to the database.");
     });
         };
   
         
    
    //--------------------Post methode to add an invoice Ends Here--------------------




  
   





   

 





         // async function  addTeleInvoice (req, res) {
  
         //    try {
         
         //    var {Année="2023",Mois="OCT",Numéro_de_facture="F-0321-1391228",ID_N_Tel="Default number", Votre_offre,Nom_Site,Total_frais_Dabonnement,Consommation_Supplémentaire,Total_autres_opérations,Total_recharges,Total_remise,Somme_totale,Total_Impôts,Total_payer} = req.body;
            
         //    var query = "INSERT INTO [dbo].[MobileInvoices]([Année],[Mois],[Numéro de facture],[ID/N° Tél],[Votre offre],[Nom Site],[Total frais D'abonnement],[Consommation Supplémentaire],[Total autres opérations],[Total recharges],[Total remise],[Somme totale],[Total Impôts],[Total à payer])VALUES(@Année,@Mois,@Numéro_de_facture,@ID_N_Tel,@Votre_offre,@Nom_Site,@Total_frais_Dabonnement,@Consommation_Supplémentaire,@Total_autres_opérations,@Total_recharges,@Total_remise,@Somme_totale,@Total_Impôts,@Total_payer)"
            
            
         //    await pool.connect().then(() =>{ 
         //          console.error("#######Error1",err);
         
            
         //       var request = new sql.Request(pool);
         //          request
         //          .input("Année", sql.NVarChar(255),Année)
         //          .input("Mois", sql.NVarChar(255),Mois)
         //          .input("Numéro_de_facture",sql.NVarChar(128),Numéro_de_facture)
         //          .input("ID_N_Tel", sql.NVarChar(128), ID_N_Tel)
         //          .input("Votre_offre", sql.NVarChar(255),Votre_offre)
         //          .input("Nom_Site", sql.NVarChar(255), Nom_Site)
         //          .input("Total_frais_Dabonnement", sql.Float,Total_frais_Dabonnement)
         //          .input("Consommation_Supplémentaire", sql.Float,Consommation_Supplémentaire)
         //          .input("Total_autres_opérations", sql.Float,Total_autres_opérations)
         //          .input("Total_recharges", sql.Float,Total_recharges)
         //          .input("Total_remise", sql.Float,Total_remise)
         //          .input("Somme_totale", sql.Float, Somme_totale)
         //          .input("Total_Impôts", sql.Float, Total_Impôts)
         //          .input("Total_payer", sql.Float,Total_payer)  
         //          request.query(query)
         //          .then((result) => {
         //             console.error("#######Error2",err);
         
         //             console.log("result : ", result)
         //            res.status(200).send("Invoice saved successfully.");
         //          res.send("Invoice saved successfully.");
            
         //          })
         //          .catch((err) => {
         //             console.error("#######Error3",err);
         
                
         //            res
         //              .status(500)
         //              .send("Error while saving data. Please try again later.");
         //          });
         //      })
         //    }
         //    catch(err) {
         //         console.error('#######Error', err);
         //         console.log(err);
         //         res.status(500).send('Error while connecting to data base. Please try again later.');
         
         //      };
         //          };
         
         

async function TestFunction(req, res) {
   try {
    var {Année= '2020',  Numéro_de_facture = 'Default Description', ID_N_Tel = 'Default number', Total_payer } = req.body;
    var query = "INSERT INTO [dbo].[MobileTest] ([Année], [Numéro de facture], [ID/N° Tél], [Total à payer]) VALUES (@Année, @Numéro_de_facture, @ID_N_Tel, @Total_payer)";
 
     await pool.connect();
     var request = new sql.Request(pool);
     request.input('Année', sql.NVarChar(255),Année)
       .input('Numéro_de_facture', sql.NVarChar(128), Numéro_de_facture)
       .input('ID_N_Tel', sql.NVarChar(128), ID_N_Tel)
       .input('Total_payer', sql.Float, Total_payer);
 
     const result = await request.query(query);
     console.log('result:', result);
     res.status(200).send("Invoice saved successfully.");
  
   } catch (err) {
     console.error('#######Error', err);
     console.log(err);
     res.status(500).send('Error while saving data. Please try again later.');
   }
 }
 
           


module.exports={
    getTeleInvoices ,
    addTeleInvoice,
    TestFunction
}

