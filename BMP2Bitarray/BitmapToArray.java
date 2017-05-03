import java.io.*;
import java.awt.*;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

public class BitmapToArray {
  public void BitmapToArray() {
    
  }
  
  public void run() {
    //System.out.println("run");
    
    File file= new File("/media/sam/Valac/University/MDDN251/Project Three/bitmaptest/neutralface.bmp");
    BufferedImage image;
    
    boolean[][] array;
    
    try {
      image = ImageIO.read(file);
      
      int width = image.getWidth();
      int height = image.getHeight();
      
      array = new boolean[width][height];
      
      for(int i = 0; i < height; ++i) {
        for(int j = 0; j < width; ++j) {
          if(j % 8 == 0) System.out.print("0b");
          System.out.print((image.getRGB(j, i) != -1) ? 1 : 0);
          if((j+1) % 8 == 0) System.out.print(", ");
          array[j][i] = image.getRGB(j, i) != -1;
        }
        System.out.println("");
      }
      
    } catch(IOException e) {
      System.out.println(e);
    }
  }
}