function Bill() {
    var bill = new Object();
    bill.id = 32767; // means bill "nobody"
    bill.buyer_id = null;
    bill.seller_id = null;
    bill.products_ids = []; // array of product that have been bought / sold
    bill.picture_URL = null;
    bill.total_TaxIncluded = null;
    bill.created_At = new Date();
    bill.active = true; // active or removed
    bill.removed_At = null;
    bill.set = set;
    console.log("Creating a new bill:\n", bill);
    return bill;
}
