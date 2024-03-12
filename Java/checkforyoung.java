    public Boolean isAllowedForYoungProducts(CustomerModel customer){
        // Check if customer is 30yo or younger and add MTV products to eligible products list.
        DateTime dob = new DateTime(customer.getDateOfBirth());
        Period diff = new Period(dob, DateTime.now());
        // When the customer has no birthDate, Hybris will return the current time as his birthdate.
        // Therefore if we don't check that this difference is superior to a minimum amount of time (i.e 1 min) we risk offering MTV products to any customer with null birthDate.  
        return ((diff.getMinutes()>1) && (diff.getYears()<30));
        return ((diff.getMinutes()>1) && (diff.getYears()<27));
    }
