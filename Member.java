

public class Member
{
    private Name name;
    private String memNo;
    
    /**
     * Constructor for objects of class Member.
     * 
     * @param fName The member's first name 
     * @param lName The member's last name
     * @param memNo The membership number
     */
    public Member(String fName, String lName, String memNo)
    {
  
        name = new Name (fName, lName);
        this.memNo = memNo; 
    }
    
    // accessors
    
    /**
     * Get the member's first name
     * 
     * @return the member's first name
     */
    public String getFirstName()
    {
        return name.getFirst();
    }
    
    /**
     * Get the member's last name
     * 
     * @return the member's last name
     */
    public String getLastName()
    {
        return name.getLast();
    }
    
    /**
     * Get the member's account Number
     * 
     * @return the member's account number
     */
    public String getMemNo()
    {
        return memNo;
    }
    
 
    public void printAccountDetails()
    {
        System.out.println( toString());
    }     
       
    /**
     * Return details of an member as a formated string
     * 
     * @return the member's details 
     */
    
    public String toString()    
    {
        String output = memNo + " ";
        output = output + name.toString() + "\n";      
        return output;
    }
    
    // mutators         
    /**
     * Change the first name
     * 
     * @param fName the new first name
     * 
     */
    public void setFirstName(String fName)
    {
        name.setFirst (fName);
    }
    
    /**
     * Change the last name
     * 
     * @param lName the new last name
     * 
     */
    public void setLastName(String lName)
    {
        name.setLast(lName);
    }
    
   
} // end class
