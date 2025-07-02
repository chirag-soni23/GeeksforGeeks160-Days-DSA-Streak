import java.util.*;

public class KClosestPointstoOrigin {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);

        for(int[] point: points){
            int x = point[0], y = point[1];
            int dist = x * x + y * y;
            maxHeap.offer(new int[]{dist,x,y});

            if(maxHeap.size() > k) maxHeap.poll();
        }

        int[][] res = new int[k][2];
        int index = 0;

        while(!maxHeap.isEmpty()){
            int[] top = maxHeap.poll();
            res[index++] = new int[]{top[1],top[2]};
        }
        return res;

    }

    public static void main(String[] args) {
        KClosestPointstoOrigin sol = new KClosestPointstoOrigin();

        int[][] points = { { 1, 3 }, { -2, 2 }, { 5, 8 }, { 0, 1 } };
        int k = 2;

        int[][] result = sol.kClosest(points, k);

        System.out.println("K Closest Points to Origin are:");
        for (int[] point : result) {
            System.out.println(Arrays.toString(point));
        }
    }
}
