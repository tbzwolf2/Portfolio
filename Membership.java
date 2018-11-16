
/**
 * A class to create a list of borrowers
 * 
 * @author Gabriel Lovett
 * @version 1
 */
public class Membership
{
    /**
     * @param currentIndex Keeps track of the current number of borrowers
     * @param borrowers An array consisting of borrower objects
     */
    private int currentIndex;
    private Borrower[] borrowers;
    /**
     * The constructor for the class
     * 
     * @param maxNoOfBorrowers set the size of the array
     */
    public Membership(int maxNoOfBorrowers)
    {
        borrowers = new Borrower[maxNoOfBorrowers];
        currentIndex = 0;
    }
    
    /**
     * Method to add a borrower to the array 
     * 
     * @param borrower creates the borrower to be added to the array
     */
    public void addBorrower(Borrower borrower)
    {
        if (currentIndex < borrowers.length)
           {
           borrowers[currentIndex] = borrower;
           currentIndex++;
           
           }
        else 
            {
            System.out.println("Membership full. Could not add borrower!"); 
            }
    
    }
    
    /**
     * Gives the set size of the array
     * 
     * @return Returns the size of the borrowers array
     */
    public int getCapacity()
    {
        return borrowers.length;
    }
    
    /**
     * Gives the number of stored borrowers
     * 
     * @return Returns the currentIndex which is a 
     * record of the number of borrowers stored
     */
    public int getNumberOfBorrowers()
    {
        return currentIndex;
    }
    
    /**
     * Prints a specific borrowers details
     * 
     * @param libraryNumber The library number of the borrower that 
     * should be printed
     */
    public boolean printBorrower(String libraryNumber)
    {
        int index;
        for (index=0; index<currentIndex; index++)
        {
            if(borrowers[index].getLibraryNumber() == libraryNumber)
            {
                borrowers[index].printBorrowerDetails();
                return true;
            }
        }

        System.out.println("Borrower with library number: " 
        + libraryNumber +  " not found"); 
        return false;
        
    }
    
    /**
     * Prints the details of all borrowers
     */
    public void printAllBorrowers()
    {
        int index;
        for(index=0; index<currentIndex; index++)
        {
            borrowers[index].printBorrowerDetails();
        }
    }
    
    /**
     * Removes a specific borrower from the array 
     * 
     * @param libraryNumber The specific number of the borrower to be removed
     * 
     * @return true The borrower has been found and removed from the array
     * @return false The borrower cannot be found
     */
    public boolean removeBorrower(String libraryNumber)
    {
        int index;
        for(index=0; index<currentIndex; index++) 
        {
            if ( borrowers[index].getLibraryNumber() == libraryNumber )
            {
                squash(index);
                return true;
            }
        }
        return false;     
    }
    
    /**
     * Looks for the specific borrower then returns it position in the array
     * 
     * @param libraryNumber The library number of the borrower to be found
     * 
     * @return index The position of the borrower
     * @return -1 The borrower could not be found
     */
    public int search(String libraryNumber)
    {
        int index;
        for(index=0; index<currentIndex; index++) 
        {
            if ( borrowers[index].getLibraryNumber() == libraryNumber )
            {
                return index;
            }
        }
        return -1;
    }
    
    /**
     * A method to be called in removing a borrower 
     * 
     * @param index The borrower to be removed
     */
    private void squash(int index)
    {
     if ( index >= 0 )
     {
        for ( int i = index ; i < currentIndex - 1 ; i++)
        {
             borrowers[i]= borrowers[i+1];
        }
        borrowers[ currentIndex - 1] = null;
        currentIndex--;
      }
    }
}
