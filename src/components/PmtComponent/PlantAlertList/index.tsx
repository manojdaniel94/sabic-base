import React, { useRef } from "react";
import '../../../assets/common/PmtDashboard.scss'
import { Table } from "antd";

const PlantAlertList = () => {

    const columns = [
        {
            title: "TIME STAMP",
            dataIndex: "timestamp",
            key: "timestamp",
            width: "30%",
        },
        {
            title: "ASSET ID",
            dataIndex: "assetId",
            key: "assetId",
            width: "15%",
        },

        {
            title: "ALERT DESCRIPTION",
            dataIndex: "alertDescription",
            key: "alertDescription",
        },
        {
            title: "ALERT STATUS",
            dataIndex: "alertStatus",
            key: "alertStatus",
            width: "20%",

            render: (status: any) => (
                <span style={{ color: status === "Active" ? "red" : "green" }}>
                    {status}
                </span>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "2",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 23 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "3",
            timestamp: "20/01/2023 16:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 116 Properly not active",
            alertStatus: "Solved",
        },
        {
            key: "4",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "5",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "6",
            timestamp: "20/01/2023 16:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 116 Properly not active",
            alertStatus: "Solved",
        },
        {
            key: "5",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "6",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "7",
            timestamp: "20/01/2023 16:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 116 Properly not active",
            alertStatus: "Solved",
        },
        {
            key: "8",
            timestamp: "20/01/2023 16:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 116 Properly not active",
            alertStatus: "Solved",
        },
        {
            key: "9",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "10",
            timestamp: "20/01/2023 16:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 116 Properly not active",
            alertStatus: "Solved",
        },
        {
            key: "11",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "12",
            timestamp: "20/01/2023 04:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 06 not working Properly",
            alertStatus: "Active",
        },
        {
            key: "13",
            timestamp: "20/01/2023 16:55",
            assetId: "G-2303B",
            alertId: "00986e",
            alertDescription: "Asset 116 Properly not active",
            alertStatus: "Solved",
        },
    ];

    return (
        <div id="pmt-alert-list">
            <div className="pmt-filter">
                <div className="pmt-title">PMT ALERT LIST</div>
            </div>
            <div className="pmt-asset-name">PLANT - 1</div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ y: 100 }}
            />
        </div>
    );
};

export default PlantAlertList;