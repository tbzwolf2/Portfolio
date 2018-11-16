import java.util.*;
import java.io.*;

/**
 * Reads a file and then processes it to another file
 *
 * @author Gabriel Lovett 
 * @version 1
 */
public class ClassrommList
{
    /**
     * @param count Counts the number of children
     * @param inFile The name of the file to be read
     * @param input A scanner to read the file
     * @param outFile The name of the file to write too
     * @param output A print writer to write to the file
     * @param total The average age of the children
     */
    private int count;
    private File inFile;
    private Scanner input;
    private File outFile;
    private PrintWriter output;
    private int total;
    
    /**
     * Constructor for objects of class ClassrommList
     * @param inFileName The name of the file to read from 
     * @param outFileName The name of the file to write to
     */
    public ClassrommList(String inFilename, String outFilename) throws FileNotFoundException
    {
        inFile = new File(inFilename);
        if (!inFile.exists()) 
        {
            throw new IllegalStateException( inFilename + " does not exist");
        }
        outFile = new File(outFilename);
        if (outFile.exists()) 
        {
            throw new IllegalStateException( outFilename + " already exists");
        }
       
        makeLinks(); 
        processFiles();
        closeLinks();
    }
    
    /**
     * A method to close the links to files
     */
    public void closeLinks()
    {
        output.close();
        input.close();
    }
    /**
     * A method to create the links to the inputed files
     */
    public void makeLinks() throws FileNotFoundException
    {
        input = new Scanner(inFile);
        output = new PrintWriter(outFile);
    }
    /**
     * A method that processes the files to the required format
     * 
     */
    public void processFiles()
    {
        count = 0;
        total = 0;
        int age = 0;
        String gender = "";
        int numberMale = 0;
        int numberFemale = 0;
        String fName = "";
        String lName = "";
        
        while(input.hasNext() == true)
        {
            count++;
            fName = input.next();
            lName = input.next();
            gender = input.next();
            if(gender.equals("M"))
            {
                numberMale = numberMale + 1;
            }
            if(gender.equals("F"))
            {
                numberFemale = numberFemale + 1;
            }
            age = input.nextInt();
            total = total + age;
            output.println(fName + " " + lName + " " + gender + " " + age);
        }
        
        output.println();
        output.println("There are " + count + " children who have an average age of " + total/count);
        output.println("There are " + numberMale + " boys and " + numberFemale + " girls");
       

    }
    
    
    
}

