/**
 * Class to test Homework 5
 * 
 * @author Gabriel Lovett
 * @version 1
 */
public class HW5Test
{    
    private int mark;
    private String name, id;
    private Membership members;
    private int numberOfCreatedMembers;

    /**
     * Constructor for objects of class HW5Test
     * 
     * @param name the student's name
     * @param id the student's id
     */
    public HW5Test(String name, String id)
    {
        this.name = name;
        this.id = id;
        mark = 0;
        numberOfCreatedMembers =0;
        runTests();
    }
    
    /*
     * reset variables to allow run tests to be run twice.
     */
    private void reset()
    {
        mark = 0;
        numberOfCreatedMembers = 0;
    }
    
    /**
     * Run the various tests
     */
    public void runTests()
    {
        // print header
        System.out.println("Name: " + name + "\tID: " + id + "\n");
        
        reset();
        testCreateArray();
        testAddBorrower();
        testCapacity();
        testNumberOfElements();
        testValidSearch();
        testInvalidSearch();
        testRemoveValidBorrower();
        testRemoveInvalidBorrower();
        testValidPrintBorrower();
        testInvalidPrintBorrower();
        testPrintAllBorrowers();
        
        System.out.println("Name: " + name + "\tID: " + id 
                           + "\t\tFinal Calculated Mark: "+mark+"\n");
        System.out.println("Up to 3 additional marks: Maximum of 12 marks. "                    
                    + "\nStudent should now print the contents of the terminal window.");        
    }
      
    /**
     * Instantiate a simple array of size 3
     */
    public void testCreateArray()
    {
        members = new Membership(3);    
    }
    
    /**
     * Create 3 borrowers
     * One mark for each
     */
    public void testAddBorrower()
    {
        try
        {
            members.addBorrower(new Borrower ("Ann", "Archer","1000", 
                                          "1 Amble Way", "Amble", "AA1 1AA"));
            System.out.println("Archer added. Mark so far: " + (++mark));
            numberOfCreatedMembers++;
        
            members.addBorrower(new Borrower ("Barbara", "Bach","1001", 
                                          "2 Blyth Boulevard", "Blyth", "BB2 2BB"));
            System.out.println("Bach added. Mark so far: " + (++mark));
            numberOfCreatedMembers++;
        
            members.addBorrower(new Borrower ("Colin", "Cowdry","1002", 3,
                                          "3 Carlisle Crecent", "Carlisle", "CC3 3CC"));
            System.out.println("Cowdry added. Mark so far: " + (++mark));
            numberOfCreatedMembers++;
        }
        catch (Exception e)
        {
            System.out.println("An exception was raised in testAddBorrower. Current mark ="+mark);
        }
    }
    
    /**
     * Test capacity - one mark
     */
    public void testCapacity()
    {
        try
        {
            if(members.getCapacity() == numberOfCreatedMembers)
            { 
                System.out.println("Capacity correct(" + (members.getCapacity()) 
                                   + "). Mark so far: " + (++mark));
            }
            else
            {
            System.out.println("Capacity incorrect(" + (members.getCapacity()) + "). No Mark!");
            }
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testCapacity. Current mark ="+mark);
        }
    }
    
    /**
     * Test number of elements populated
     */    
    public void testNumberOfElements()
    {
        // Test for correct number of borrowers
        try
        {
            if(members.getNumberOfBorrowers() == numberOfCreatedMembers)
            { 
                System.out.println("Number of elements correct(" 
                          + (members.getNumberOfBorrowers()) + "). Mark so far: " + (++mark));
            }
            else
            {
                System.out.println("Number of elements incorrect(" 
                          + (members.getNumberOfBorrowers()) + "). No Mark!");
            }
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testNumberOfElements. "
                                 + "Current mark = "+mark);
        }
    }
    
    /**
     * Test valid search
     */
    public void testValidSearch()
    {
        try
        {
            int searchValue = members.search("1002");
            if(searchValue == 2)
            { 
                System.out.println("testValidSearch returned correct value: " 
                              + searchValue + ".  Mark so far: " + (++mark));
            }
            else
            {
                System.out.println("testValidSearch returned incorrect value:"
                              + searchValue + ".  No Mark!");
            }
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testValidSearch. Current mark = "+mark);
        }        
    }
    
    /**
     * Test invalid search
     */
    public void testInvalidSearch()
    {
        try
        {
            int searchValue = members.search("1234");
            if(searchValue == -1)
            { 
                System.out.println("testInvalidSearch returned correct value:" 
                              + searchValue + ".  Mark so far: " + (++mark));
            }
            else
            {
                System.out.println("testInvalidSearch returned incorrect value:" + searchValue + ".  No Mark!");
            }
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testInvalidSearch. Current mark ="+mark);
        }        
    }
       
    /**
     * Test removal of a valid borrower
     */
    public void testRemoveValidBorrower()
    {
        try
        {
            members.removeBorrower("1002");
            System.out.println("TestRemoveValidBorrower - Number of borrowers now:" 
                                   + members.getNumberOfBorrowers());
        
            if(members.getNumberOfBorrowers() == numberOfCreatedMembers -1)
            { 
                System.out.println("Removal suceeded. Mark so far: " + (++mark));
                numberOfCreatedMembers--;
            }
            else
            {
                System.out.println("removal incorrect. No Mark!");
            }
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testRemoveValidBorrower. "
                                + "Current mark ="+mark);
        }
    }
    
    /**
     * Test removal of a invalid borrower
     */
    public void testRemoveInvalidBorrower()
    {
        try
        {
            System.out.println("\ntestRemoveInvalidBorrower:");
            members.removeBorrower("999");
        
            if(members.getNumberOfBorrowers() == numberOfCreatedMembers)
            { 
            
                System.out.println("Number of borrowers still:" 
                                + members.getNumberOfBorrowers()+". Mark so far: " + (++mark));
            }
            else
            {
                System.out.println("removal incorrect. No Mark!");
            }
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testRemoveInvalidBorrower. "
                                + "Current mark ="+mark);
        }
    }
    
    /**
     * Test printing of valid borrower
     */
    public void testValidPrintBorrower()
    {
        try
        {
             System.out.println("\ntestValidPrintBorrower:");        
             System.out.println("Output should be:\nBarbara Bach\n2 Blyth Boulevard\n"
                                + "Blyth\nBB2 2BB\nLibrary Number: 1001\nNumber of loans: 1\n\n"
                                + "ACTUAL OUTPUT:");
             members.printBorrower("1001");
             System.out.println("ADD ONE MARK IF CORRECT.");       
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testValidPrintBorrower. "
                                + "Current mark ="+mark);
        }     
    }
    
    public void testInvalidPrintBorrower()
    {
        try
        {
            System.out.println("\ntestInvalidPrintBorrower");
            System.out.println("Output should be:\nBorrower with library number: 1003 not found.\n"
                                + "ACTUAL OUTPUT:");
            members.printBorrower("1003");
            System.out.println("ADD ONE MARK IF CORRECT.");
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testInvalidPrintBorrower. "
                               + "Current mark ="+mark);
        }
    }
    
    /**
     * Test printing of valid borrower
     */
    public void testPrintAllBorrowers()
    {
        try
        {
            System.out.println("\n************* Name: " + name + "\tID: " + id + " ****************");
            System.out.println("\ntestPrintAllBorrowers\nOutput should be:\n");
            System.out.println("Ann Archer\n1 Amble Way\nAmble\nAA1 1AA\nLibrary Number: "
                              + "1000\nNumber of loans: 1\n\n"
                              + "Barbara Bach\n2 Blyth Boulevard\nBlyth\nBB2 2BB\nLibrary Number: "
                              + "1001\nNumber of loans: 1\n\nACTUAL OUTPUT:");
            members.printAllBorrowers();
            System.out.println("ADD ONE MARK IF CORRECT.");
        }
        catch(Exception e)
        {
            System.out.println("An exception was raised in testPrintAllBorrowers. "
                                + "Current mark ="+mark);
        }
    
    System.out.println("************************* Testing complete *************************\n");
    } 
} // end class
