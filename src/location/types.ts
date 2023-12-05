import { ApiProperty } from "@nestjs/swagger"

export class RegeoDTO {
    @ApiProperty({
        default: 40.714224,
        description: '经度'
    })
    lat: number

    @ApiProperty({
        default: -73.961452,
        description: '纬度'
    })
    lng: number
}